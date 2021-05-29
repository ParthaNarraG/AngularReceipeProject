import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

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


  constructor(private http: HttpClient) { }

  signUp(data: any) {
    return new Promise((resolve, reject) => {
      this.http.post<authResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBx_WScLMDegH8vAto9EU0DZGgrxUwvECU", data)
        .subscribe(resolve, reject)
    })
  }

  signIn(data: any) {


    return new Promise((resolve, reject) => {
      this.http.post<authResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBx_WScLMDegH8vAto9EU0DZGgrxUwvECU", data)
        .pipe(catchError(error => {
          return throwError(error)
        })).subscribe(resolve,reject);
    })

  }

}
