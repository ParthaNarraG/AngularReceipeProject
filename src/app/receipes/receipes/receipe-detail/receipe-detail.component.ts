import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.scss']
})
export class ReceipeDetailComponent implements OnInit {

  @Input() receipeDetails:any;
  constructor() { }

  ngOnInit(): void {
  }

}
