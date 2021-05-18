import { Component, OnInit } from '@angular/core';
import { ShoppingServiceService } from 'src/app/services/shopping-service.service';
import { ingredient} from '../../shared/ingredient.model'


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredient:any;

  constructor(private shoppingService:ShoppingServiceService) { 
    this.shoppingService.addNewIngredient.subscribe((data:any)=>{
      this.ingredient.push(data);
    })
  }

  ngOnInit(): void {
    this.ingredient=this.shoppingService.ingredient;
  }
}
