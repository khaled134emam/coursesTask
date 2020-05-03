import { Component, OnInit } from '@angular/core';
import {
  BsModalRef,
  BsModalService,
} from 'ngx-bootstrap/modal/ngx-bootstrap-modal';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/courses.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  bsModalRef: BsModalRef;
  closeBtnName: string;
  courseDetails: Course;
  isCardEnabled: boolean;
  constructor(
    private modalRef: BsModalRef,
    private bsModalService: BsModalService,
    private courseService: CoursesService
  ) {}

  ngOnInit(): void {
    this.showDetails(this.bsModalService.config.initialState['courseId']);
    this.isCardEnabled = this.bsModalService.config.initialState[
      'isCardEnabled'
    ];
  }

  hideModal() {
    this.modalRef.hide();
  }

  showDetails(courseId: number) {
    this.courseService.getCoursesById(courseId).subscribe((details) => {
      this.courseDetails = details;
    });
  }
  addCourseToCard(courseId: number) {
    this.courseService
      .editCourseSeats(this.courseService.currentStudentId, courseId)
      .subscribe();
  }
}
