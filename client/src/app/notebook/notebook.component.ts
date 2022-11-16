import { Component, OnInit } from '@angular/core';
import { Note } from '../_models/note';
import { AccountService } from '../_services/account.service';
import { NoteService } from '../_services/notes.service';



@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {
  displayedColumns: string[] = ['lp', 'date', 'mood', 'moodDescription','symptom','symptomDescription','description','days'];
  dataSource: Note[] = [];
  note: Note = null;
  lp: number = 0;
  
      
  //Element_data = sciągnieta z kontrolera tablica przypisanych do użytkownika notatek Czy tu muszę jakoś sformatować dane?     
      
  
  constructor(private _note: NoteService, private _account: AccountService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes():void {
    this._note.listByUserId(JSON.parse(localStorage.getItem('user')).id).subscribe((res: Note[]) => {
      this.dataSource = res;
      
    })
  }

 

 

}
