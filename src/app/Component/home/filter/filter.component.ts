import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import {
  durationFilter,
  CategoryLevelFilter,
} from 'src/app/models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  durationCheckedList: durationFilter[] = [];
  categoryCheckedList: CategoryLevelFilter[] = [];
  levelCheckedList: CategoryLevelFilter[] = [];
  durationFilter: any[] = [
    {
      filterTemplate: 'less than 2 hours',
      minValue: 0,
      maxValue: 1,
    },
    {
      filterTemplate: 'from 2  to 10 hours',
      minValue: 2,
      maxValue: 10,
    },
    {
      filterTemplate: 'more than 10 hours',
      minValue: 11,
      maxValue: 1000,
    },
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

  checkDuration(
    checked: boolean,
    minValue: number,
    maxValue: number,
    filterKey: number
  ) {
    if (checked) {
      this.durationCheckedList.push({
        minValue: minValue,
        maxValue: maxValue,
        filterKey: filterKey,
      });
    } else {
      let index = this.durationCheckedList.findIndex((key) => {
        return key.filterKey == filterKey;
      });
      this.durationCheckedList.splice(index, 1);
    }

    this.coursesServices.durationSubject.next(this.durationCheckedList);
  }

  checkCategory(checked: boolean, value: string, filterKey: number) {
    this.checkCategoryLevel(
      checked,
      value,
      filterKey,
      this.categoryCheckedList
    );
    this.coursesServices.categorySubject.next(this.categoryCheckedList);
  }

  checkLevel(checked: boolean, value: string, filterKey: number) {
    this.checkCategoryLevel(checked, value, filterKey, this.levelCheckedList);
    this.coursesServices.levelSubject.next(this.levelCheckedList);
  }

  private checkCategoryLevel(
    checked: boolean,
    value: string,
    filterKey: number,
    checkedList: CategoryLevelFilter[]
  ) {
    if (checked) {
      checkedList.push({
        value: value,
        filterKey: filterKey,
      });
    } else {
      let index = checkedList.findIndex((key) => {
        return key.filterKey == filterKey;
      });
      checkedList.splice(index, 1);
    }
  }
}
