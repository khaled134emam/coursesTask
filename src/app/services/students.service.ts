import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';
import { StudentRequest } from '../models/student-request.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}
  getStudents() {
    return this.http.get<Student[]>('/students');
  }

  getStudentsCouurses() {
    return this.http.get<StudentRequest[]>('/requests');
  }

  getStudentById(studentId: number) {
    return this.http.get<Student[]>('/students').pipe(
      map((students) => {
        return students.find((student) => {
          return student.Id == studentId;
        });
      })
    );
  }

  getStudentRequest(studentId: number) {
    return this.http.get<StudentRequest[]>('/requests').pipe(
      map((requests) => {
        return requests.filter((request) => {
          return request.StudentId == studentId;
        });
      })
    );
  }
}
