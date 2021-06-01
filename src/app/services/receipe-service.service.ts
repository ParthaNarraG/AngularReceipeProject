import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { receipe } from '../receipes/receipes/receipe.model'
import { ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ReceipeServiceService {
  receipes:receipe[]=[];
  getReceipesArray=new Subject();
  reciepeDetailsInfo=new Subject();

  constructor(private router:Router) { }

  getReceipe(index:number){
    return this.receipes[index];
  }

  getReceipes(){
    return this.receipes;
  }

  addReceipe(newRecepie:receipe){
    this.receipes.push(newRecepie);
    console.log(this.receipes);
  }

  updateReceipe(index:number,updatedReceipe:any){
    console.log(updatedReceipe);
    console.log(this.receipes);
    this.receipes[index]=updatedReceipe
    console.log(this.receipes)
  }

  deleteRecepie(index:number){
    this.receipes.splice(index,1);
    this.router.navigate(['/receipe'])
  }

}
