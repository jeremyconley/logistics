import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {

  constructor(private contactService: ContactService, private actRoute: ActivatedRoute, private router: Router) { }

  contactId: any;
  contact: any;
  errorMsg: any;
  contacts: any;

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.contactId = id;
    });

    this.contact = this.contactService.getContactById(this.contactId).subscribe(
      (data) => {this.contact = data;},
      (error) => { this.errorMsg = error;}
    );

  }

  update(contactId: any, contacts: any){
    this.contactService.updateContact(this.contactId, this.contact).subscribe(
      (data) => {this.contact = data
        this.contactService.getAllContacts().subscribe(
          (data) => this.contacts = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => {this.errorMsg = error; }
    );
    this.router.navigate(['serviceproviderdetails', this.contact.SID]);
  }

  cancel(){
    this.router.navigate(['serviceproviderdetails', this.contact.SID]);
  }

}
