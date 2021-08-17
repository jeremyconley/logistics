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
  public notes = Array();
  public contacts = Array();
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

  getDetails(id: any){
    this.serviceProvider = this.spService.getServiceProvider(id);
    this.notes = new Array();
    this.contacts = new Array();
    //Retrieve our notes
    var i;
    let allNotes = this.noteService.getNotes();
    for (i = 0; i < allNotes.length; i++) {
      if (allNotes[i].sid == id) {
        this.notes.push(allNotes[i]);
      }
    }
    //Retrieve our contacts
    var j;
    let allContacts = this.contactService.getContacts();
    for (j = 0; j < allContacts.length; j++) {
      if (allContacts[j].sid == id) {
        this.contacts.push(allContacts[j]);
      }
    }
  }

  addNote() {
    this.router.navigate(['addNote', this.serviceProvider.id]);
  }

  editNote(note: any) {
    this.router.navigate(['/editnote', note.id]);
  }

  deleteNote(note: any) {
    this.noteService.deleteNote(note.id)
    // this.noteService.deleteNote(note.id).subscribe(() => {
    //   this.noteService.getNotes().subscribe(
    //     (data) => this.notes = data,
    //     (error) => this.errorMsg = error
    //   )
    // })
  }

  editContact(contact: any) {

  }

  deleteContact(contact: any) {
    
  }

  addContact() {
    this.router.navigate(['addContact', this.serviceProvider.id]);
  }

  

  
    
    

    // this.empService.getEmployeesById(id).subscribe(
    //   (data) => {
    //     this.employee = data;
    //   },
    //   (error) => {
    //     this.errorMsg = error;
    //   },
    //   () => console.log("Complete")
    // )
  
}
