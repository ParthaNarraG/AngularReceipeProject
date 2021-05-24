import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingServiceService } from 'src/app/services/shopping-service.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingService:ShoppingServiceService) { }

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
    this.shoppingService.addNewIngredient.next(newItem)
  }

}
