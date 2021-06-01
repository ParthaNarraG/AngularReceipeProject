import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators';
import { throwError,BehaviorSubject } from 'rxjs';
import { environment } from "src/environments/environment";
import { user } from '../shared/user.model';
import { Router } from '@angular/router';

interface authResponse {
  displayName?: string,
  email: string,
  expiresIn: string,
  idToken: string,
  kind: string,
  localId: string,
  refreshToken: string,
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean=false;

  userData:any;

  userObserver=new BehaviorSubject<any>(null);

  webKey = environment.webKey;

  constructor(private http: HttpClient,private router:Router) {
   }

   /**
    * @description this method is used for sign-in 
    * @param data  we pass the necessary credentials in the object
    * @returns a response either a successful one or failure
    */

  signUp(data: any) {
    return this.http.post<authResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.webKey}`, data)
      .pipe(catchError(this.handleError))
  }

     /**
    * @description this method is used for sign-up 
    * @param data  we pass the necessary credentials in the object
    * @returns a response either a successful one or failure
    */

  signIn(data: any) {
    return this.http.post<any>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.webKey}`, data)
      .pipe(catchError(this.handleError))
  }

     /**
    * @description this method is used for handling error
    * @param data  we pass the necessary credentials in the object
    * @returns a response either a successful one or failure
    */

  handleError(error: any) {
    console.log(error)
    let errorMessage = "An Unknown Error Occured"
    console.log(error.error.error.message);
    if (error.error.error.hasOwnProperty('message')) {
      return throwError(error.error.error.message);
    }
    return errorMessage;
  }

     /**
    * @description this method is used for handling data after login 
    * @param data  we pass the necessary credentials in the object
    * @returns a response either a successful one or failure
    */

  handleUserInfo(response:any){
    console.log(response);
    const userInfo=new user(response.email,response.localId,response.idToken,response.expiresIn);
    localStorage.setItem("userData",JSON.stringify(userInfo));
    this.userObserver.next(userInfo)
  }

   /**
    * @description this method is used for logout
    * @param data  we pass the necessary credentials in the object
    * @returns a response either a successful one or failure
    */

   onlogout(){
     this.userObserver.next(null);
     localStorage.clear();
     this.router.navigate(['/login'])
   }

   autoLogin(){
      if("userData" in localStorage){
        const userInfo:any = localStorage.getItem("userData");
        const parser=JSON.parse(userInfo);
        const userData=new user(parser.email,parser.id,parser.token,parser.expiryDate);
        this.userObserver.next(userData);
      }
      else{
        return
      }
   }

}
