import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { receipe } from '../receipes/receipes/receipe.model'
import { ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ReceipeServiceService {

  reciepeDetailsInfo=new Subject();
  receipes: receipe[]=[
    new receipe("Test Receipe1",
    "New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
    [
      new ingredient('buns',1),
      new ingredient('frenchFies',20),
    ]),
    new receipe("Test Receipe2","New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
    [
      new ingredient('buns',1),
      new ingredient('frenchFies',20),
    ]),
  ]

  constructor(private router:Router) { }

  getReceipe(index:number){
    return this.receipes[index];
  }

  addReceipe(newRecepie:receipe){
    this.receipes.push(newRecepie)
  }

  updateReceipe(index:number,updatedReceipe:any){
    console.log(updatedReceipe);
    console.log(this.receipes);
    this.receipes[index]=updatedReceipe
    console.log(this.receipes)
  }

  deleteRecepie(index:number){
    this.receipes.splice(index,1);
    this.router.navigate(['/'])
  }

}
