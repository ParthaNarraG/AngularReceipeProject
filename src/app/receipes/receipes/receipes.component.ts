import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.scss']
})
export class ReceipesComponent implements OnInit {

  receipeInfo:any="";
  constructor() { }

  ngOnInit(): void {
  }

}
