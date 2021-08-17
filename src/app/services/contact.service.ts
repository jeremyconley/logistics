import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactList = new Array();

  constructor() { }

  getContacts(){
    return this.contactList;
  }

  addContact(contactModel: any) {
    this.contactList.push(contactModel);
  }
}
