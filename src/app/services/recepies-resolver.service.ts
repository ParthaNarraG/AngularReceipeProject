import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecepiesResolverService implements Resolve<any> {

  constructor(private dataStorage:DataStorageService) { }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.dataStorage.fetchData();
  }
}
