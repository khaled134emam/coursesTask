import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/courses.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  durationSubject: Subject<number[]> = new Subject<number[]>();
  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<Course[]>('./assets/data/courses.json');
  }
}
