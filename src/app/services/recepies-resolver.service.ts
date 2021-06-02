import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AuthCallsService } from './auth-calls.service';


@Injectable({
  providedIn: 'root'
})
export class RecepiesResolverService implements Resolve<any> {

  constructor(private auth:AuthCallsService) { }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.auth.onFetchData();
  }
}
