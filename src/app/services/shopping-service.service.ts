import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { ingredient } from '../shared/ingredient.model'

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  addNewIngredient:any=new Subject();

  ingredient:ingredient[]=[new ingredient('apples','10'),
  new ingredient('tomotoes','15')]

  addIngredient(data:any){
    this.ingredient.push(data);
  }

  constructor() { }
}
