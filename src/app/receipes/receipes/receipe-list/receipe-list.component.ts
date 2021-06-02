import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthCallsService } from 'src/app/services/auth-calls.service';
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
  

  constructor(private recepieService:ReceipeServiceService,
    private router:Router,private route:ActivatedRoute,
    private auth:AuthCallsService) { 
    this.recepieService.getReceipesArray.subscribe((data)=>{
      this.receipes=data;
      console.log(data,"RecepieList");
    })
  }

  ngOnInit(): void {
    this.auth.onFetchData();
    this.receipes=this.recepieService.getReceipes();
  }

  /**
   * @description sending the receipe details clicked by the user
   * @param data 
   */
  receipeDetails(data:any){
    this.recepieService.reciepeDetailsInfo.next(data);
  }
  
  newReceipe(){
    this.router.navigate(["new"],{relativeTo:this.route})
  }

}
