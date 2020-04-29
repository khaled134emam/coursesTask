import { Component, OnInit, ɵɵpureFunction1 } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/courses.model';
import { durationFilterEnum } from 'src/app/models/filter.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  coureseList: Course[] = [];
  searchList: Course[] = [];
  searchKey: string = '';

  constructor(private CourseService: CoursesService) {}

  ngOnInit() {
    this.showCourses();

    this.CourseService.durationSubject.subscribe((data) => {
      console.log(data);
    });
  }

  showCourses() {
    this.CourseService.getCourses().subscribe(
      (res) => (this.coureseList = res)
    );
  }

  searchByName() {
    this.searchList = this.coureseList.filter((courseItem) =>
      courseItem.CourseName.toLocaleLowerCase().includes(
        this.searchKey.toLocaleLowerCase()
      )
    );
  }
}
