import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.css']
})
export class EditnoteComponent implements OnInit {

  constructor(private noteService: NotesService, private actRoute: ActivatedRoute, private router: Router) { }

  noteId: any;
  note: any;
  errorMsg: any;
  notes: any;

  initialTitle: any;
  initialContent: any;

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.noteId = id;
    });

    this.note = this.noteService.getNoteById(this.noteId).subscribe(
      (data) => {
        this.note = data;
        this.initialTitle = this.note.Title;
        this.initialContent = this.note.Notes;
      },
      (error) => { this.errorMsg = error;}
    );


    

  }

  update(noteId: any, notes: any){
    if (confirm("Click to confirm changes: \nTitle: " + this.initialTitle + " --> " + this.note.Title
    + "\nContent: " + this.initialContent + " --> " + this.note.Notes
    )) {
      this.noteService.updateNote(this.noteId, this.note).subscribe(
        (data) => {this.note = data
          this.noteService.getAllNotes().subscribe(
            (data) => this.notes = data,
            (error) => this.errorMsg = error
          )
        },
        (error) => {this.errorMsg = error; }
      );
      this.router.navigate(['serviceproviderdetails', this.note.SID]);
    }
    
  }

  cancel(){
    this.router.navigate(['serviceproviderdetails', this.note.SID]);
  }

}
