import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { ingredient } from '../shared/ingredient.model'

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  addNewIngredient:any=new Subject();
  sendItemIndex:any=new Subject();

  ingredient:ingredient[]=[new ingredient('apples',10),
  new ingredient('tomotoes',15)]

  addIngredient(data:any){
    this.ingredient.push(data);
  }

  getIngredient(index:number){
    return this.ingredient[index];
  }

  updateIngredient(index:number,newIngredient:any){
    console.log(newIngredient);
    this.ingredient[index]=newIngredient; 
  }

  deleteIngredient(index:number){
    this.ingredient.splice(index,1);
  }

  constructor() { }
}
