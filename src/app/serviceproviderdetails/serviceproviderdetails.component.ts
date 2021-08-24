import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { NotesService } from '../services/notes.service';
import { SpService } from '../services/sp.service';

@Component({
  selector: 'app-serviceproviderdetails',
  templateUrl: './serviceproviderdetails.component.html',
  styleUrls: ['./serviceproviderdetails.component.css']
})
export class ServiceproviderdetailsComponent implements OnInit {

  public serviceProvider: any;
  public notes: any;
  public contacts: any;
  public services: any;
  public errorMsg: any;

  constructor(private router: Router, private route: ActivatedRoute, private spService: SpService, private noteService: NotesService, private contactService: ContactService)
   { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if (id != null) {
        this.getDetails(id);
      }
    });
  }

  ngAfterViewInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if (id != null) {
        this.getDetails(id);
      }
    });
  }


  getDetails(id: any){
    //Get service details
    this.spService.getServiceProviderById(id).subscribe(
      (data) => {
        this.serviceProvider = data;
      },
      (error) => {
        this.errorMsg = error;
      },
      () => console.log("Complete")
    )

    //Retrieve notes
    this.noteService.getNotes(id).subscribe(
      (data) => {
        this.notes = data;
      },
      (error) => {
        this.errorMsg = error;
      },
      () => console.log("Complete")
    )

    //Retrieve contacts
    this.contactService.getContacts(id).subscribe(
      (data) => {
        this.contacts = data;
      },
      (error) => {
        this.errorMsg = error;
      },
      () => console.log("Complete")
    )
  
  }

  editService(){
    this.router.navigate(['editService', this.serviceProvider.ServiceId]);
  }

  deleteService(){
    if(confirm("Are you sure to delete " + this.serviceProvider.ServiceName + "?")) {
      this.spService.deleteServiceProvider(this.serviceProvider.ServiceId).subscribe(() => {
        this.spService.getServiceProviders().subscribe(
          (data) => this.services = data,
          (error) => this.errorMsg = error
        )
      })
    }

    this.router.navigate(["home"]);
  }

  addNote() {
    this.router.navigate(['addNote', this.serviceProvider.ServiceId]);
  }

  editNote(note: any) {
    this.router.navigate(['/editnote', note.NoteId]);
  }

  deleteNote(note: any) {
    if(confirm("Are you sure to delete " + note.Title + "?")) {
      this.noteService.deleteNote(note.NoteId).subscribe(() => {
        this.noteService.getNotes(this.serviceProvider.ServiceId).subscribe(
          (data) => this.notes = data,
          (error) => this.errorMsg = error
        )
      })
    }
  }

  addContact() {
    this.router.navigate(['addContact', this.serviceProvider.ServiceId]);
  }

  editContact(contact: any) {
    this.router.navigate(['editContact', contact.PersonID]);
  }

  deleteContact(contact: any) {
    
    if(confirm("Are you sure to delete " + contact.FirstName + "?")) {
      this.contactService.deleteContact(contact.PersonID).subscribe(() => {
        this.contactService.getContacts(this.serviceProvider.ServiceId).subscribe(
          (data) => this.contacts = data,
          (error) => this.errorMsg = error
        )
      })
    }
  }
}
