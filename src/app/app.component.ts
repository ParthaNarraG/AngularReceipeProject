import { Component, Inject, OnInit,PLATFORM_ID } from '@angular/core';
import { AuthService } from './services/auth.service';
import { isPlatformBrowser  } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Receipe Book';
  selectedNavLink:any="receipes";
  constructor(private authService:AuthService,
    @Inject(PLATFORM_ID) private platformId:any){
  }

  ngOnInit(){
    if(isPlatformBrowser(this.platformId)){
      this.authService.autoLogin();
    }
  }


}
