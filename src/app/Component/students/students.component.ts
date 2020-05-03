import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../models/student.model';
import { StudentRequest } from '../../models/student-request.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  studentList: Student[] = [];
  studentCoursesList: StudentRequest[] = [];
  loading: boolean = false;
  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.loading = true;
    // timeout until loading the data
    let timeout = setTimeout(() => {
      this.showStudents();
      this.showStudentCourses();
      timeout;
      this.loading = false;
    }, 2000);
  }

  showStudents() {
    this.studentsService.getStudents().subscribe((students) => {
      this.studentList = students;
    });
  }

  showStudentCourses() {
    this.studentsService.getStudentsCouurses().subscribe((studentCourses) => {
      this.studentCoursesList = studentCourses;
    });
  }

  getStudentCoursesNumber(studentId: number) {
    // this.studentCoursesList.filter(req => req.StudentId == studentId);
    let studentRequests = this.studentCoursesList.filter(
      (req) => req.StudentId == studentId
    );
    return studentRequests
      .map((x) => x.Courses.length)
      .reduce((current, next) => current + next, 0);
  }
}
