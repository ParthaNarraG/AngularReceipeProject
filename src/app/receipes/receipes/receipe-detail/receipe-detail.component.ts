import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReceipeServiceService } from 'src/app/services/receipe-service.service';
import { ShoppingServiceService } from 'src/app/services/shopping-service.service';
import { ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.scss']
})
export class ReceipeDetailComponent implements OnInit {
  id:number=0;
  isShow:boolean=false;
  receipeDetails: any;
  constructor(private recepieService: ReceipeServiceService, private shoppingService: ShoppingServiceService,
    private route:ActivatedRoute,private router:Router) {
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
      let newItem=new ingredient(ele.ingredientName,ele.quantity)
      this.shoppingService.addIngredient(newItem);
    })
  }

  manageReceipeDropdown(){
    this.isShow=!this.isShow;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      console.log(this.recepieService.getReceipes());
      this.receipeDetails=this.recepieService.getReceipe(this.id);
    })
  }

  editReceipe(){
    this.router.navigate(["edit"],{relativeTo:this.route})
  }

  deleteReceipe(){
    this.recepieService.deleteRecepie(this.id);
  }
}
