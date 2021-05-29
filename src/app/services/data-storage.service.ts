import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ReceipeServiceService } from './receipe-service.service';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  baseUrl="https://receipebook-314ee-default-rtdb.firebaseio.com/"
  constructor(private http:HttpClient,private receipeService:ReceipeServiceService) {}

   saveData(){
     const recepie:any=this.receipeService.getReceipes();
      return new Promise((resolve,reject)=>{
        this.http.put(`${this.baseUrl}recepies.json`,recepie).subscribe(resolve,reject)
      })    
   }

   fetchData(){
    return new Promise((resolve,reject)=>{
      this.http.get(`${this.baseUrl}recepies.json`).pipe(map((response:any)=>{
        response.map((ele:any)=>{
          ele.hasOwnProperty("ingredient")?"":ele.ingredient=[];
        })
        return response;
      })).subscribe(resolve,reject);
    })
  }

}
