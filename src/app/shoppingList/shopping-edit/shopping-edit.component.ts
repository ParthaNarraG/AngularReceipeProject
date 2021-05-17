import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

 @Output() addNewIngredient:any=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description Add an Ingredient with Ingredient Name and Quantity
   * @param name 
   * @param quantity 
   */
  addIngredient(name:any,quantity:any){
    let newItem={
      ingredientName:name,
      quantity:quantity
    }
    this.addNewIngredient.emit(newItem)
  }

}
