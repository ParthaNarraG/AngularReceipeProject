import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from "src/environments/environment";


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
  webKey = environment.webKey;

  constructor(private http: HttpClient) { }


  signUp(data: any) {
    return this.http.post<authResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.webKey}`, data)
      .pipe(catchError(this.handleError))
  }

  signIn(data: any) {
    return this.http.post<authResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.webKey}`, data)
      .pipe(catchError(this.handleError), map(function (resp: any) {
        resp.displayName = resp.email.split(".")[0];
        return resp;
      }))
  }

  handleError(error: any) {
    let errorMessage = "An Unknown Error Occured"
    console.log(error.error.error.message);
    if (error.error.error.hasOwnProperty('message')) {
      return throwError(error.error.error.message);
    }
    return errorMessage;
  }
}
