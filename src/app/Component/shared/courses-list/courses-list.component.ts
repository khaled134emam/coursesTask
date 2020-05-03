import {
  Component,
  OnInit,
  ɵɵpureFunction1,
  Input,
  OnChanges,
} from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/courses.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CourseDetailsComponent } from './course-details/course-details.component';
import {
  durationFilter,
  CategoryLevelFilter,
} from 'src/app/models/filter.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnChanges {
  durationCheckedList: durationFilter[] = [];
  categoryCheckedList: CategoryLevelFilter[] = [];
  levelCheckedList: CategoryLevelFilter[] = [];
  searchList: Course[] = [];
  searchKey: string = '';
  bsModalRef: BsModalRef;
  @Input() courseList: Course[];
  @Input() isSearchEnabled: boolean = true;
  @Input() tilte: string = '';
  @Input() isCardEnabled: boolean = true;
  constructor(
    private CourseService: CoursesService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.CourseService.durationSubject.subscribe((filters) => {
      this.durationCheckedList = filters;
      this.filterWithSearch();
    });
    this.CourseService.categorySubject.subscribe((filters) => {
      this.categoryCheckedList = filters;
      this.filterWithSearch();
    });

    this.CourseService.levelSubject.subscribe((filters) => {
      this.levelCheckedList = filters;
      this.filterWithSearch();
    });
  }
  ngOnChanges() {
    this.searchList = this.courseList;
  }
  searchByName() {
    this.filterWithSearch();
  }

  openCourseDetails(courseId) {
    this.bsModalRef = this.modalService.show(
      CourseDetailsComponent,
      Object.assign(
        {},
        {
          class: 'gray w-500px',
          initialState: {
            courseId: courseId,
            isCardEnabled: this.isCardEnabled,
          },
        }
      )
    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  addCourseToCard(courseId: number) {
    this.CourseService.editCourseSeats(
      this.CourseService.currentStudentId,
      courseId
    ).subscribe();
  }

  private filterWithSearch() {
    let result1: Course[] = [];
    let result2: Course[] = [];
    let result3: Course[] = [];

    this.durationCheckedList.forEach((filter) => {
      let filterCourses = this.courseList.filter((f) => {
        return (
          filter.minValue <= f.CourseDuration &&
          f.CourseDuration <= filter.maxValue
        );
      });
      result1.push(...filterCourses);
    });

    if (this.durationCheckedList.length == 0) {
      result1 = this.courseList;
    }

    this.categoryCheckedList.forEach((filter) => {
      let filterCourses = result1.filter((c) => {
        return (
          c.CourseCategory.toLocaleLowerCase() ==
          filter.value.toLocaleLowerCase()
        );
      });
      result2.push(...filterCourses);
    });

    if (this.categoryCheckedList.length == 0) {
      result2 = result1;
    }

    this.levelCheckedList.forEach((filter) => {
      let filterCourses = result2.filter((c) => {
        return (
          c.courseLevel.toLocaleLowerCase() == filter.value.toLocaleLowerCase()
        );
      });
      result3.push(...filterCourses);
    });

    if (this.levelCheckedList.length == 0) {
      result3 = result2;
    }
    this.searchList = result3.filter((courseItem) =>
      courseItem.CourseName.toLocaleLowerCase().includes(
        this.searchKey.toLocaleLowerCase()
      )
    );
  }
}
