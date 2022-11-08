import { Component, OnInit } from '@angular/core';
import { Note } from '../_models/note';
import { NoteService } from '../_services/notes.service';

// const ELEMENT_DATA: any[] = [
//   {position: 1, date: '06/11/22', mood: 'dobre', symbol: 'H'},
//   {position: 2, date: '05/11/22', mood: 'bardzo dobre', symbol: 'He'},
//   {position: 3, date: '04/11/22', mood: 'słabe', symbol: 'Li'},

// ];

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {
  displayedColumns: string[] = ['lp', 'date', 'mood', 'moodDescription','symptom','symptomDescription','description','days'];
  dataSource: any[] = [];
  note: Note = null;
  
      
  //Element_data = sciągnieta z kontrolera tablica przypisanych do użytkownika notatek Czy tu muszę jakoś sformatować dane?     
      
  
  constructor(private _note: NoteService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes():void {
    this._note.listByUserId(JSON.parse(localStorage.getItem('user')).id).subscribe((res: Note[]) => {
      this.dataSource = res;
      console.log(res);
      console.log(this.dataSource);
    })
  }

  // private getUserSetting(): void {
  //   this._service.getById(this.userSetting.id).subscribe((res: UserSetting) => 
  //   { 
  //     console.log(res);
  //     this.userSetting = res;
  //     this.profileForm.patchValue(res);
  //     console.log(this.profileForm.get('lastSmokeDate').value);
  //     this.profileForm.get('lastSmokeDate').patchValue(this.formatDate(res.lastSmokeDate));
  //   });
  // }

}
