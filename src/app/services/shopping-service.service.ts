import { Injectable, Output, EventEmitter } from '@angular/core';
import { ingredient } from '../shared/ingredient.model'

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  @Output() addNewIngredient:any=new EventEmitter();

  ingredient:ingredient[]=[new ingredient('apples','10'),
  new ingredient('tomotoes','15')]

  addIngredient(data:any){
    this.ingredient.push(data)
  }

  constructor() { }
}
