import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isLoginMode=true;
  isLoading=false;
  constructor(private authService:AuthService,private router:Router) { }

  switchMode(){
    this.isLoginMode=!this.isLoginMode;
  }

  async onSubmit(data:any){
    const body={
      email:data.value.email,
      password:data.value.password,
      returnSecureToken:true
    }
    let obs:any;
    this.isLoading=true;
    this.isLoginMode?obs=this.authService.signIn(body):obs=this.authService.signUp(body);
    obs.subscribe((response:any)=>{
      this.isLoading=false;
      this.authService.handleUserInfo(response);
      this.router.navigate(['/receipe']);
    },(error:any)=>{  
      this.isLoading=false;
      Swal.fire({
        text:error,
        icon:"error"
      })
    })
  }

  ngOnInit(): void {
  }
  



}
