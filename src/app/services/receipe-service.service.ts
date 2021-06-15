import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { receipe } from '../receipes/receipes/receipe.model'


@Injectable({
  providedIn: 'root'
})
export class ReceipeServiceService {
  receipes:receipe[]=[];
  filteredReceipes:receipe[]=[];
  getReceipesArray=new BehaviorSubject(this.receipes);
  reciepeDetailsInfo=new Subject();
  filteredReceipeInfo=new BehaviorSubject(this.filteredReceipes);

  constructor(private router:Router) { }

  getReceipe(index:number){
    // return this.receipes[index];
    return this.filteredReceipes[index];
  }

  getReceipes(){
     this.receipes.map((ele,i)=>{
       ele.id=i;
     });
     return this.receipes;
  }

  addReceipe(newRecepie:receipe){
    this.receipes.push(newRecepie);
  }

  updateReceipe(index:number,updatedReceipe:any){
    const{id}=this.filteredReceipes[index]
    updatedReceipe.id=id;
    this.filteredReceipes[index]=updatedReceipe;
    this.receipes.map((ele,index)=>{
      this.filteredReceipes.map(elem=>{
        if(ele.id===elem.id){
          this.receipes[index]=elem;
        }
      })
    })
  }

  deleteRecepie(index:number){
    const id:any=this.filteredReceipes[index].id;
    console.log(id);
    this.receipes.map((ele,i)=>{
      if(ele.id===id){
        this.receipes.splice(index,1);
        this.reciepeDetailsInfo.next(this.receipes);
        this.router.navigate(['/receipe'])
      }
    })
  }
}
