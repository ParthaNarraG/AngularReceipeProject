import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthCallsService } from 'src/app/services/auth-calls.service';
import { ReceipeServiceService } from 'src/app/services/receipe-service.service';
import { receipe } from '../receipes/receipe.model';

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styleUrls: ['./receipe-edit.component.scss']
})
export class ReceipeEditComponent implements OnInit {
  id:number=0;
  editForm:any;
  editMode=false;
  constructor(private route:ActivatedRoute,
    private receipe:ReceipeServiceService,
    private router:Router,
    private auth:AuthCallsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id']!=null;
    })
    this.editReceipe();
  }

  onDeleteIngredient(index:number){
    return (this.editForm.get('ingredients') as FormArray).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  onSubmit(){
    console.log(this.editForm.value)
    let newReceipe:any=new receipe(this.editForm.value.name,
      this.editForm.value.description,
      this.editForm.value.imagePath,
      this.editForm.value.ingredients)
    if(this.editMode){
      this.receipe.updateReceipe(this.id,newReceipe);  
      this.auth.onSaveData(); 
    }
    else{
      this.receipe.addReceipe(newReceipe);
      this.auth.onSaveData(); 
    }
    this.onCancel();
  }

  addIngredient(){
    this.editForm.get('ingredients').push(new FormGroup({
      ingredientName:new FormControl("",Validators.required),
      quantity:new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[1-9]+[0-9]*$")]))
    }))
  }

  getControls(){
    return (this.editForm.get('ingredients') as FormArray).controls
  }

  editReceipe(){
    let receipeItem=this.receipe.getReceipe(this.id);
    console.log(receipeItem)
    let receipeName="",receipeImage="",receipeDesc="",recepieIngredients=new FormArray([]);
    if(this.editMode){
      receipeName=receipeItem.name;
      receipeImage=receipeItem.imagePath;
      receipeDesc=receipeItem.description;
      if(receipeItem['ingredient']){
        receipeItem.ingredient.map((ele)=>{
          recepieIngredients.push(new FormGroup({
            ingredientName:new FormControl(ele.ingredientName,Validators.required),
            quantity:new FormControl(ele.quantity,Validators.compose([Validators.required,Validators.pattern("^[1-9]+[0-9]*$")]))
          }))
        })
      }
    }
    this.editForm=new FormGroup({
      name:new FormControl(receipeName,Validators.required),
      imagePath:new FormControl(receipeImage,Validators.required),
      description:new FormControl(receipeDesc,Validators.required),
      ingredients:recepieIngredients
    })
  }

  


}
