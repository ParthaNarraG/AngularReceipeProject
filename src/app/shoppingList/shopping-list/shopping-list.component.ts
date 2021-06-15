import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingServiceService } from 'src/app/services/shopping-service.service';
import { ingredient } from 'src/app/shared/ingredient.model';
import * as state from "../shopping-list/store/shopping-list.reducer"

// interface AppState{
//   ingredient:ingredient[]
// }

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredient:any;
  // listObserver$:any;

  constructor(private shoppingService:ShoppingServiceService) { 
    this.shoppingService.addNewIngredient.subscribe((data:any)=>{
      this.ingredient.push(data);
    })
    // this.ingredient=this.store.select('ingredient');
  }

  ngOnInit(): void {
    // console.log(state.initialState);
    this.ingredient=this.shoppingService.ingredient;
    // this.ingredient=state.initialState.ingredient;
  }

  editItem(i:any){
    this.shoppingService.sendItemIndex.next(i);
  }
} 
