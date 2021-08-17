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
  public sid: any;
  contacts: any;
  errorMsg: any;

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if (id != null) {
        this.sid = id;
      }
    });
  }

  onSubmit(spForm: any){
    this.contactModel.id = this.contactService.getContacts().length.toString();
    this.contactModel.sid = this.sid;
    this.contactService.addContact(this.contactModel)
    // this.empService.postEmployee(this.empModel).subscribe(
    //   (data) => {this.employees = data;
    //     this.empService.getEmployees().subscribe(
    //       (data) => this.employees = data, //Get Updataed list after inserting
    //       (error) => this.errorMsg = error
    //     )
    //   }
    // )
    this.router.navigate(['/home']);
  }

}
