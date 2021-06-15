import { Component, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ShoppingServiceService } from 'src/app/services/shopping-service.service';
import { ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('formData',{static:false}) slForm:any;
  editedItem:any;
  editMode:boolean=false;
  editIndex:any;
  subscription:any;
  constructor(private shoppingService:ShoppingServiceService) {
    this.editMode=false;
  }

  ngOnInit(): void {
    this.subscription=this.shoppingService.sendItemIndex.subscribe((data:number)=>{
      this.editIndex=data;
      this.editMode=true;
      this.editedItem=this.shoppingService.getIngredient(data);
      this.slForm.setValue({
        ingredient:this.editedItem.ingredientName,
        amount:this.editedItem.quantity
      })
    })
  }

  /**
   * @description Add an Ingredient with Ingredient Name and Quantity
   * @param name 
   * @param quantity 
   */
  addIngredient(data:any){
    console.log(data);
    let updateItem=new ingredient(data.control.value.ingredient,data.control.value.amount)
    if(this.editMode===true){
      this.shoppingService.updateIngredient(this.editIndex,updateItem);
      this.editMode=false;
      data.reset();
    }
    else{
      this.shoppingService.addIngredient(updateItem)
      // this.store.dispatch({type:"ADD_INGREDIENT",payload:updateItem});
      this.onClear();
    }
  }

  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }

  deleteItem(){
    this.shoppingService.deleteIngredient(this.editIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
