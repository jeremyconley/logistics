import { Injectable } from '@angular/core';
import { ServiceProvider } from '../models/serviceprovider';

@Injectable({
  providedIn: 'root'
})
export class SpService {

  spList = new Array();

  constructor() { }

  getServiceProviders(){
    return this.spList;
  }

  getServiceProvider(id: number) {
    return this.spList.find(x => x.id == id);
  }

  addServiceProvider(spModel: any) {
    this.spList.push(spModel);
  }


}
