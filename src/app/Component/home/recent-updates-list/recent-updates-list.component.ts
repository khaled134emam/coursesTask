import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-updates-list',
  templateUrl: './recent-updates-list.component.html',
  styleUrls: ['./recent-updates-list.component.scss'],
})
export class RecentUpdatesListComponent implements OnInit {
  text: string =
    'Karim Mostafa Post in Learning Powerful mental course  and Karim Mostafa Post in Learning Powerful mental course   ';
  constructor() {}

  ngOnInit(): void {}

  trim() {
    let data = this.text;
  }
}
