import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notesList = new Array();

  constructor() { }

  getNotes(){
    return this.notesList;
  }

  addNote(noteModel: any) {
    this.notesList.push(noteModel);
  }

  deleteNote(noteModel: any) {
    var i = 0;
    for (i = 0; i < this.notesList.length; i++) {
      if (this.notesList[i].id == noteModel.id) {
        this.notesList.splice(i, 1);
      }
    }
  }
}
