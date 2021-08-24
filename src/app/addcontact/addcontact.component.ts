import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  public contactModel = new Contact();
  contacts: any;
  errorMsg: any;
  serviceId: any;
  
  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if (id != null) {
        this.serviceId = id;
      }
    });
  }

  onSubmit(noteForm: any){
    this.contactModel.SID = this.serviceId;
    // this.noteModel.NoteId = // Between any two numbers
    // Math.floor(Math.random() * (100000 - 0 + 1)) + 0;
    this.contactService.postContact(this.contactModel).subscribe(
      (data) => {this.contacts = data;
        this.contactService.getAllContacts().subscribe(
          (data) => this.contacts = data, //Get Updataed list after inserting
          (error) => this.errorMsg = error
        )
      }
    )
    this.router.navigate(['serviceproviderdetails', this.serviceId]);
  }

  cancel(){
    this.router.navigate(['serviceproviderdetails', this.serviceId]);
  }

}
