import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  // templateUrl: './success-alert.component.html',
  template:`<div class="successAlert">Success Alert</div>`,
  // styleUrls: ['./success-alert.component.scss']
  styles:[`
    .successAlert{
      color:green;
    }`
  ]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
