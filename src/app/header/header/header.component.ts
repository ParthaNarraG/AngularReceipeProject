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
 
  constructor(private storage:DataStorageService,private recepieService:ReceipeServiceService,private authService:AuthService) { 
    
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


  logout(){
    this.authService.onlogout();
  }

}
