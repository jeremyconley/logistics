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
  public sid: any;
  notes: any;
  errorMsg: any;

  constructor(private noteService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if (id != null) {
        this.sid = id;
      }
    });
  }

  onSubmit(spForm: any){
    this.noteModel.id = this.noteService.getNotes().length.toString();
    this.noteModel.sid = this.sid;
    this.noteService.addNote(this.noteModel)
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
