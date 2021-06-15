import { Injectable } from '@angular/core';
import { FilteredPipePipe } from '../pipes/filtered-pipe.pipe';
import { DataStorageService } from './data-storage.service';
import { ReceipeServiceService } from './receipe-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCallsService {

  constructor(private dataStorage:DataStorageService,
    private receipeService:ReceipeServiceService,
    private filteredPipe:FilteredPipePipe) { }

  async onFetchData(){
    try{
      let type:any="All";
      const response:any=await this.dataStorage.fetchData();
      this.receipeService.receipes=response;
      this.receipeService.filteredReceipes=response;
      this.filteredPipe.transform(response,type,"type");
    }
    catch(error:any){
      console.log(error)
    }
  }

  async onSaveData(){
    try{
      const response:any=await this.dataStorage.saveData();
      this.onFetchData()
    }
    catch(error:any){
      console.log(error);
    }
  }
}
