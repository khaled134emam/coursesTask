import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpEventType,
  HttpClient,
} from '@angular/common/http';
import { of, from, Observable } from 'rxjs';
import { Course } from '../models/courses.model';
import { tap } from 'rxjs/operators';
import { Student } from '../models/student.model';
import { StudentRequest } from '../models/student-request.model';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  courses: any;
  students: any;
  requested: any;

  constructor(private http: HttpClient) {}
  initApp() {
    this.http.get<Course[]>('./assets/data/courses.json').subscribe((c) => {
      this.courses = c;
    });
    this.http.get<Student[]>('./assets/data/students.json').subscribe((s) => {
      this.students = s;
    });
    this.http
      .get<StudentRequest[]>('./assets/data/requests.json')
      .subscribe((r) => {
        this.requested = r;
      });
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.endsWith('initapp')) {
      this.initApp();
      return of(
        new HttpResponse({
          status: 200,
          body: true,
        })
      );
    } else if (req.url.endsWith('courses')) {
      return of(new HttpResponse({ status: 200, body: this.getCourses() }));
    } else if (req.url.includes('/course/')) {
      let id = +req.url.split('/')[req.url.split('/').length - 1]
      debugger
      return of(
        new HttpResponse({
          status: 200,
          body: this.getCourseById(id),
        })
      );
    } else if (req.url.endsWith('students')) {
      return of(new HttpResponse({ status: 200, body: this.getStudents() }));
    } else if (req.url.endsWith('requests')) {
      return of(new HttpResponse({ status: 200, body: this.getRequested() }));
    } else if (req.url.endsWith('editCourseSeats')) {
      return of(
        new HttpResponse({
          status: 200,
          body: this.editCourseSeats(
            req.body.currentStudentId,
            req.body.courseId
          ),
        })
      );
    }

    return next.handle(req);
  }

  getCourses() {
    return this.courses;
  }

  getCourseById(id: number) {
    return this.courses
      ? this.courses.find((courseItem) => courseItem.CourseId == id)
      : null;
  }

  getStudents() {
    return this.students;
  }

  getRequested() {
    return this.requested;
  }

  editCourseSeats(studentId: number, courseId: number) {
    let editCourseSeats = this.courses.find((c) => {
      return c.CourseId == courseId;
    });
    if (editCourseSeats != undefined) {
      editCourseSeats.AvailableSeats = editCourseSeats.AvailableSeats - 1;
    }
    let studentRequest = this.requested.find((s) => {
      return s.StudentId == studentId;
    });
    if (studentRequest != undefined) {
      let checkCourseExist = studentRequest.Courses.find((c) => {
        return c.CourseId == courseId;
      });

      if (checkCourseExist == undefined) {
        studentRequest.Courses.push({ CourseId: courseId, Members: 1 });
      }
    }
  }
}
