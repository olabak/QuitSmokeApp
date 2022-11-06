import { Component, OnInit } from '@angular/core';
import { Note } from '../_models/note';

const ELEMENT_DATA: any[] = [
  {position: 1, date: '06/11/22', mood: 'dobre', symbol: 'H'},
  {position: 2, date: '05/11/22', mood: 'bardzo dobre', symbol: 'He'},
  {position: 3, date: '04/11/22', mood: 'słabe', symbol: 'Li'},

];

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {
  displayedColumns: string[] = ['lp', 'date', 'mood', 'moodDescription','symptom','symptomDescription','description','days'];
  dataSource = ELEMENT_DATA;
  
      
  //Element_data = sciągnieta z kontrolera tablica przypisanych do użytkownika notatek Czy tu muszę jakoś sformatować dane?     
      
  
  constructor() { }

  ngOnInit(): void {
  }

}
