import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReceipeServiceService } from 'src/app/services/receipe-service.service';
import { receipe } from '../receipe.model'

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss']
})
export class ReceipeListComponent implements OnInit {

  @Output() reciepeDetailsInfo=new EventEmitter();
  receipes:any;
  

  constructor(private recepieService:ReceipeServiceService) { }

  ngOnInit(): void {
    this.receipes=this.recepieService.receipes;
  }

  /**
   * @description sending the receipe details clicked by the user
   * @param data 
   */
  receipeDetails(data:any){
    this.recepieService.reciepeDetailsInfo.emit(data);
  }
  

}
