import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  categorySubject: Subject<number[]> = new Subject<number[]>();
  levelSubject: Subject<number[]> = new Subject<number[]>();

  durationCheckedList: number[] = [];

  durationFilter: string[] = [
    'less than 2 hours',
    'from 2  to 10 hours',
    'more than 10 hours',
  ];

  categoryFilter: string[] = [
    'development',
    'finance & accounting',
    'it & software',
    'others',
  ];
  levelFilter: string[] = ['beginner', 'intermediate', 'expert', 'all levels'];

  constructor(private coursesServices: CoursesService) {}

  ngOnInit(): void {}

  checkDuration(checked: boolean, filterKey: number) {
    if (checked) {
      this.durationCheckedList.push(filterKey);
    } else {
      let index = this.durationCheckedList.indexOf(filterKey);
      this.durationCheckedList.splice(index, 1);
    }

    this.coursesServices.durationSubject.next(this.durationCheckedList);
  }
}
