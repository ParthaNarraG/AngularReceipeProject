import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { receipe } from '../receipes/receipes/receipe.model'


@Injectable({
  providedIn: 'root'
})
export class ReceipeServiceService {
  receipes:receipe[]=[];
  getReceipesArray=new BehaviorSubject(this.receipes);
  reciepeDetailsInfo=new Subject();

  constructor(private router:Router) { }

  getReceipe(index:number){
    this.getReceipesArray.next(this.receipes);
    return this.receipes[index];
  }

  getReceipes(){
    this.getReceipesArray.next(this.receipes);
    return this.receipes;
  }

  addReceipe(newRecepie:receipe){
    this.receipes.push(newRecepie);
  }

  updateReceipe(index:number,updatedReceipe:any){
    this.receipes[index]=updatedReceipe;
  }

  deleteRecepie(index:number){
    this.receipes.splice(index,1);
    this.reciepeDetailsInfo.next(this.receipes);
    this.router.navigate(['/receipe'])
  }

}
