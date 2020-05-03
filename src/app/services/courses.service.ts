import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from '../models/courses.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { durationFilter, CategoryLevelFilter } from '../models/filter.model';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  currentStudentId: number = 1234;
  durationSubject: Subject<durationFilter[]> = new Subject<durationFilter[]>();
  categorySubject: Subject<CategoryLevelFilter[]> = new Subject<
    CategoryLevelFilter[]
  >();
  levelSubject: Subject<CategoryLevelFilter[]> = new Subject<
    CategoryLevelFilter[]
  >();
  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<Course[]>('/courses');
  }

  getCoursesById(courseId) {
    let param = new HttpParams();
    param.set('id', courseId);
    return this.http.get<Course>('/course/' + courseId);
  }

  editCourseSeats(studentId: number, courseId: number) {
    return this.http.post('editCourseSeats', {
      currentStudentId: studentId,
      courseId: courseId,
    });
  }
}
