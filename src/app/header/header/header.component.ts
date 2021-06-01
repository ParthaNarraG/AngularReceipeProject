import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { ReceipeServiceService } from 'src/app/services/receipe-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShow:boolean=false;
  isAuthenticated:boolean=false;
  @Output() navigateItem=new EventEmitter()

  constructor(private storage:DataStorageService,private recepieService:ReceipeServiceService,private authService:AuthService) { 
    this.onFetchData();
  }

  ngOnInit(): void {
    this.authService.userObserver.subscribe((data)=>{
      if(data===null){
          //...
      }
      else{
        this.isAuthenticated=true;
      }
    })
  }

  /**
   * @description sending the details of which navigation link clicked by the user
   * @param data 
   */

  navigator(data:any){
    this.navigateItem.emit(data);
  }


  manageDropdown(){
    this.isShow=!this.isShow;
  }

  /**
   * @description Saving the newly added recepies to the database
   * @returns a promise 
   */
  async onSaveData(){
    try{
      const response:any=await this.storage.saveData();
      console.log(response);
    }
    catch(error:any){
      console.log(error);
    }
  }

  async onFetchData(){
    try{
      const response:any=await this.storage.fetchData();
      this.recepieService.receipes=response;
      console.log(response);
      this.recepieService.getReceipesArray.next(this.recepieService.receipes);
    }
    catch(error:any){
      console.log(error)
    }
  }

  logout(){
    this.authService.onlogout();
  }
}
