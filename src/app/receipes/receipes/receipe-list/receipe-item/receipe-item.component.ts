import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.scss']
})
export class ReceipeItemComponent implements OnInit {
  @Input() index:number=0;
  @Input() receipe:any;
  constructor() { 

  }

  ngOnInit(): void {
  }
}
