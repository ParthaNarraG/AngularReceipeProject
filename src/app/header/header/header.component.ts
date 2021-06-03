import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShow:boolean=false;
  isAuthenticated:boolean=false;
 
  constructor(private authService:AuthService,private router:Router) { 
    
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
