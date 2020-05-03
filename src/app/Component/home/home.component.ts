import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/courses.model';
import { timeInterval } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  courseList: Course[] = [];
  loading: boolean = false;
  constructor(private courseService: CoursesService) { }
  ngOnInit() { }
  ngAfterViewInit() {
    this.loading = true;

    // timeout until loading the data
    let timeout = setTimeout(() => {
      this.showCourses();
      timeout;
      this.loading = false;
    }, 2000);
  }
  showCourses() {
    this.courseService.getCourses().subscribe((res) => {

      if (this.courseList.length == 0) {
        this.courseList.push(...res)
      }
      else{
        this.courseList = res;
      }
    });
  }
}
