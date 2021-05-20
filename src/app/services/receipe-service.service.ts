import { Injectable, Output, EventEmitter } from '@angular/core';
import { receipe } from '../receipes/receipes/receipe.model'
import { ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ReceipeServiceService {

  @Output() reciepeDetailsInfo=new EventEmitter();
  receipes: receipe[]=[
    new receipe("Test Receipe1",
    "New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
    [
      new ingredient('buns','1'),
      new ingredient('frenchFies','20'),
    ]),
    new receipe("Test Receipe2","New Receipe Added to the list",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
    [
      new ingredient('buns','1'),
      new ingredient('frenchFies','20'),
    ]),
  ]

  constructor() { }

  getReceipe(index:number){
    return this.receipes[index];
  }
}
