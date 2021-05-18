import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ReceipeServiceService } from 'src/app/services/receipe-service.service';
import { ShoppingServiceService } from 'src/app/services/shopping-service.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.scss']
})
export class ReceipeDetailComponent implements OnInit {
  receipeDetails: any = "";
  constructor(private recepieService: ReceipeServiceService, private shoppingService: ShoppingServiceService) {
    this.recepieService.reciepeDetailsInfo.subscribe((data: any) => {
      this.receipeDetails = data;
      console.log(data);
    })
  }

  /**
   * @description sending the ingredients to the shopping service. 
   * @param data 
   */
  sendIngredients(data: any) {
    console.log(data);
    data.map((ele: any) => {
      let newItem = {
        ingredientName: ele.ingredientName,
        quantity: ele.quantity
      }
      this.shoppingService.addIngredient(newItem);
    })
  }

  ngOnInit(): void {

  }

}
