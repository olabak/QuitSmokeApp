import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mood, Note } from 'src/app/_models/note';
import { User } from 'src/app/_models/user';
import { UserSetting } from 'src/app/_models/userSettings';
import { AccountService } from 'src/app/_services/account.service';
import { NoteService } from 'src/app/_services/notes.service';
import { UserSettingsService } from 'src/app/_services/userSettings.service';

@Component({
  selector: 'app-notebook-form',
  templateUrl: './notebook-form.component.html',
  styleUrls: ['./notebook-form.component.css']
})
export class NotebookFormComponent implements OnInit {
  notebookForm: FormGroup;
  note: Note = null;
  user: User;
  
  
  constructor(private _note: NoteService,
     private readonly _account: AccountService) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  onSubmit(){
    console.log("tu click")
    this.addNote()
    
  }

  addNote(): void {
    console.log("tu click2",this.notebookForm.value)
    this.note = this.notebookForm.value;
    
    this.user = JSON.parse(localStorage.getItem('user'))
    this.note.userId = this.user.id;
    console.log(this.notebookForm.value,this.note.mood,this.note.symptom, this.user);
    this._note.addNote(this.note).subscribe(
      (response: Note) =>
      {
        this.note = response;
        this.note.addDate = this.formatDate(response.addDate);
      }
    );

  }


  private initializeForm() {
    this.notebookForm = new FormGroup({
      'mood': new FormControl(0),
      'moodDescription': new FormControl(),
      symptom: new FormControl(0),
      'symptomDescription': new FormControl(),
      'description': new FormControl()
    });
}

private formatDate(date) {
  const d = new Date(date);
  let month = '' + (d.getDate())
  let day = '' + d.getDate();
  const year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}


}
