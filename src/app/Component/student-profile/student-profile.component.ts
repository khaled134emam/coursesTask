import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/models/student.model';
import { Course } from 'src/app/models/courses.model';
import { StudentCourse } from 'src/app/models/student-request.model';
import { CoursesService } from 'src/app/services/courses.service';
import { summaryFileName } from '@angular/compiler/src/aot/util';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss'],
})
export class StudentProfileComponent implements OnInit {
  studentData: Student;
  studentCourses: StudentCourse[];
  coursesList: Course[] = [];
  totalCost: number = 0;
  loading = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentServices: StudentsService,
    private coursesService: CoursesService
  ) {
    // console.log(this.activatedRoute.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.loading = true;
    // timeout until loading the data
    let timeout = setTimeout(() => {
      this.showStudentData(+this.activatedRoute.snapshot.params['id']);
      this.showStudentRequested(+this.activatedRoute.snapshot.params['id']);
      // destroy timeout
      timeout;

      this.loading = false;

    }, 2000);
  }

  showStudentData(studentId: number) {
    this.studentServices.getStudentById(studentId).subscribe((data) => {
      this.studentData = data;
    });
  }

  showStudentRequested(studentId: number) {
    this.studentServices.getStudentRequest(studentId).subscribe((x) => {
      this.studentCourses = [].concat.apply(
        [],
        x.map((c) => c.Courses)
      );

      this.showCourses();
    });
  }
  showCourses() {
    this.coursesService.getCourses().subscribe((x) => {
      this.studentCourses.forEach((d) => {
        let course = x.find((course) => {
          return course.CourseId == d.CourseId;
        });
        if (course != undefined) {
          this.coursesList.push(course);
          this.totalCost = course.CoursePrice + this.totalCost;
        }
      });
    });
  }
}
