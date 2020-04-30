import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MbscEventcalendarOptions } from '../../../../lib/mobiscroll/js/mobiscroll.angular.min';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TodoListComponent implements OnInit {
  events: any;

  eventSettings: MbscEventcalendarOptions = {
    display: 'inline', // Specify display mode like: display: 'bottom' or omit setting to use default
    view: {
      calendar: { type: 'week' },
      eventList: { type: 'day', scrollable: true },
    },
  };
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.events = [
      {
        start: '2020-04-30T07:00:00.000Z',
        end: '2020-04-30T08:00:00.000Z',
        text: 'Product team mtg.',
        color: '#f67944',
      },
      {
        start: '2020-05-01T07:00:00.000Z',
        end: '2020-05-01T07:15:00.000Z',
        text: 'Green box to post office',
        color: '#6e7f29',
      },
      {
        start: '2020-04-29T07:45:00.000Z',
        end: '2020-04-29T08:00:00.000Z',
        text: 'Quick mtg. with Martin',
        color: '#de3d83',
      },
      {
        start: '2020-04-08T08:30:00.000Z',
        end: '2020-04-08T09:30:00.000Z',
        text: 'Product team mtg.',
        color: '#f67944',
      },
      {
        start: '2020-04-08T10:00:00.000Z',
        end: '2020-04-08T10:30:00.000Z',
        text: 'Stakeholder mtg.',
        color: '#f67944',
      },
      {
        start: '2020-04-08T12:00:00.000Z',
        end: '2020-04-08T12:30:00.000Z',
        text: "Lunch @ Butcher's",
        color: '#00aabb',
      },
      {
        start: '2020-04-08T14:00:00.000Z',
        end: '2020-04-08T15:00:00.000Z',
        text: 'General orientation',
        color: '#f67944',
      },
      { d: '4/14', text: 'Dexter BD', color: '#37bbe4' },
      { d: '4/5', text: 'Luke BD', color: '#37bbe4' },
      { d: 'w3', text: 'Employment (Semi-weekly)', color: '#635045' },
      {
        start: '2020-04-09T23:00:00.000Z',
        end: '2020-04-14T23:00:00.000Z',
        text: 'Sam OFF',
        color: '#ca4747',
      },
      {
        start: '2020-04-17T23:00:00.000Z',
        end: '2020-04-28T23:00:00.000Z',
        text: 'Europe tour',
        color: '#56ca70',
      },
      {
        start: '2020-02-06T23:00:00.000Z',
        end: '2020-02-24T23:00:00.000Z',
        text: 'Dean OFF',
        color: '#99ff33',
      },
      {
        start: '2020-03-04T23:00:00.000Z',
        end: '2020-03-13T23:00:00.000Z',
        text: 'Mike OFF',
        color: '#e7b300',
      },
      {
        start: '2020-05-06T23:00:00.000Z',
        end: '2020-05-15T23:00:00.000Z',
        text: 'John OFF',
        color: '#669900',
      },
      {
        start: '2020-05-31T23:00:00.000Z',
        end: '2020-06-10T23:00:00.000Z',
        text: 'Carol OFF',
        color: '#6699ff',
      },
      {
        start: '2020-07-01T23:00:00.000Z',
        end: '2020-07-16T23:00:00.000Z',
        text: 'Jason OFF',
        color: '#cc9900',
      },
      {
        start: '2020-08-05T23:00:00.000Z',
        end: '2020-08-13T23:00:00.000Z',
        text: 'Ashley OFF',
        color: '#339966',
      },
      {
        start: '2020-09-09T23:00:00.000Z',
        end: '2020-09-19T23:00:00.000Z',
        text: 'Marisol OFF',
        color: '#8701a9',
      },
      {
        start: '2020-09-30T23:00:00.000Z',
        end: '2020-10-11T23:00:00.000Z',
        text: 'Sharon OFF',
        color: '#cc6699',
      },
      { d: '12/25', text: 'Christmas Day', color: '#ff0066' },
      { d: '1/1', text: "New Year's day", color: '#99ccff' },
      { d: '4/1', text: "April Fool's Day", color: '#ff6666' },
      {
        d: '11/2',
        text: 'File Form 720 for the third quarter',
        color: '#a63e14',
      },
      {
        d: '11/2',
        text: 'File Form 730 and pay tax on wagers accepted during September',
        color: '#a63e14',
      },
      {
        d: '11/2',
        text:
          'File Form 2290 and pay the tax for vehicles first used during September',
        color: '#a63e14',
      },
      {
        d: '11/2',
        text: 'File Form 941 for the third quarter',
        color: '#a63e14',
      },
      {
        d: '11/2',
        text: 'Deposit FUTA owed through Sep if more than $500',
        color: '#a63e14',
      },
      {
        d: '11/30',
        text:
          'Deposit payroll tax for payments on Nov 21-24 if the semiweekly deposit rule applies',
        color: '#a63e14',
      },
      {
        d: '11/30',
        text: 'File Form 730 and pay tax on wagers accepted during October',
        color: '#a63e14',
      },
      {
        d: '11/30',
        text:
          'File Form 2290 and pay the tax for vehicles first used during October',
        color: '#a63e14',
      },
    ];
  }
}
