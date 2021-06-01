import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AuthCallsService } from './auth-calls.service';
import { DataStorageService } from './data-storage.service';
import { ReceipeServiceService } from './receipe-service.service';

@Injectable({
  providedIn: 'root'
})
export class RecepiesResolverService implements Resolve<any> {

  constructor(private authCalls:AuthCallsService) { }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.authCalls.onFetchData();
  }
}
