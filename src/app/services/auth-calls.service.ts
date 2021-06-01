import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { ReceipeServiceService } from './receipe-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCallsService {

  constructor(private dataStorage:DataStorageService,private receipeService:ReceipeServiceService) { }

  async onFetchData(){
    try{
      const response:any=await this.dataStorage.fetchData();
      this.receipeService.receipes=response;
      console.log(response);
      this.receipeService.getReceipesArray.next(this.receipeService.receipes);
    }
    catch(error:any){
      console.log(error)
    }
  }

}
