import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styleUrls: ['./receipe-edit.component.scss']
})
export class ReceipeEditComponent implements OnInit {
  id:number=0;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
    })
  }

}
