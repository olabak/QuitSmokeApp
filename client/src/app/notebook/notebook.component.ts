import { Component, OnInit } from '@angular/core';
import { Note } from '../_models/note';
import { UserSetting } from '../_models/userSettings';
import { AccountService } from '../_services/account.service';
import { NoteService } from '../_services/notes.service';
import { UserSettingsService } from '../_services/userSettings.service';



@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {
  displayedColumns: string[] = ['lp', 'date', 'mood', 'moodDescription','symptom','symptomDescription','description'];
  dataSource: Note[] = [];
  note: Note = null;
  lp: number = 0;
  today: Date = new Date();
  lastSmokeDate: Date;
  diff: number;
  userSetting: UserSetting = null;
       
  constructor(private _note: NoteService, private _account: AccountService,private userService: UserSettingsService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes():void {
    this._note.listByUserId(JSON.parse(localStorage.getItem('user')).id).subscribe((res: Note[]) => {
      this.dataSource = res;
    })
  }

 

}
