import { Component, OnInit } from '@angular/core';
import { ingredient} from '../../shared/ingredient.model'


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredient:ingredient[]=[new ingredient('apples','10'),
  new ingredient('tomotoes','15')]

  constructor() { }

  ngOnInit(): void {
  }

  addItem(data:any){
    console.log(data);
    this.ingredient.push(data);
  }

}
