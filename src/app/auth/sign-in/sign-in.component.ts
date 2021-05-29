import { Component, OnInit } from '@angular/core';
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
  constructor(private authService:AuthService) { }

  switchMode(){
    this.isLoginMode=!this.isLoginMode;
  }

  async onSubmit(data:any){
    console.log(data);
    const body={
      email:data.value.email,
      password:data.value.password,
      returnSecureToken:true
    }
    this.isLoading=true;
    if(this.isLoginMode){
      try{
        const response:any=await this.authService.signIn(body);
        this.isLoading=false;
        console.log(response);
      }
      catch(error:any){
        this.isLoading=false;
        Swal.fire({
          text:error.error.error.message,
          icon:"error"
        })
      }
    }
    else{
      try{
        const response:any=await this.authService.signUp(body);
        this.isLoading=false;
        console.log(response)
      }
      catch(error:any){
        Swal.fire({
          text: error.error.error.message,
          icon: "error"
        })
        this.isLoading=false;
        console.log(error);
      }
    }
  }

  ngOnInit(): void {
  }

}
