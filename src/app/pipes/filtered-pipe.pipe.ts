import { Pipe, PipeTransform } from '@angular/core';
import { ReceipeServiceService } from '../services/receipe-service.service';

@Pipe({
  name: 'filteredPipe'
})
export class  FilteredPipePipe implements PipeTransform {

  constructor(private receipeService:ReceipeServiceService){

  }

  transform(value:any,parameter:any,property:any){
    value=this.receipeService.receipes;
    if("type" in localStorage){
      parameter=localStorage.getItem("type");
    }
    let newArray:any=[];
    if(value.length===0 || parameter==="All"){
      newArray=value;
    }
    else{
      value.map((ele:any)=>{
        ele[property]=== parameter?newArray.push(ele):"";
      })
    }
    this.receipeService.filteredReceipes=newArray;
    this.receipeService.filteredReceipeInfo.next(newArray);
    return newArray;
  }
}
