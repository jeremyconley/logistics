import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from '../models/note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit {

  public noteModel = new Note();
  notes: any;
  errorMsg: any;
  serviceId: any;
  
  constructor(private noteService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if (id != null) {
        this.serviceId = id;
      }
    });
  }

  onSubmit(noteForm: any){
    this.noteModel.SID = this.serviceId;
    this.noteModel.NoteId = // Between any two numbers
    Math.floor(Math.random() * (100000 - 0 + 1)) + 0;
    this.noteService.postNote(this.noteModel).subscribe(
      (data) => {this.notes = data;
        this.noteService.getNotes(this.serviceId).subscribe(
          (data) => this.notes = data, //Get Updataed list after inserting
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
