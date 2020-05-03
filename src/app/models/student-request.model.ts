export class StudentRequest {
  StudentId: number;
  RequestDate: string;
  TeacherID: number;
  Courses: StudentCourse[];
  PaymentType: string;
}

export class StudentCourse {
  CourseId: number;
  Members: number;
}
