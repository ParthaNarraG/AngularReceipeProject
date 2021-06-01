import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  token: string = "";
  constructor(private auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(true){
      this.auth.autoLogin();
    }
    this.auth.userObserver.subscribe((data) => {
      data!==null?this.token = data.token:"";
    })
    if (this.token === null) {
      return next.handle(request);
    }
    else {
      const modifiedRequest: any = request.clone({ params: new HttpParams().set('auth', this.token) })
      return next.handle(modifiedRequest);
    }
  }
}
