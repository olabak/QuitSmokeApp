import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HistoryService } from '../_services/history.service';
import { History } from 'src/app/_models/history';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
  template: 'passed in {{ data.couse }}'
})
export class PopUpComponent implements OnInit {

  form: FormGroup;
  history: History = null;

  constructor(private dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {couse: string}, private _service: HistoryService) {
    
   }

  ngOnInit(): void {
    this.initializeForm()
    
  }

  initializeForm(){
    this.form = new FormGroup({
      'Couse': new FormControl(''),
  });}

  onSubmit(){
    
    this._service.addHistory({...this.form.value, UserId: JSON.parse(localStorage.getItem('user')).id}).subscribe(
      (res: History) =>{
      this.history = res;
      this.history.addDate = this.formatDate(res.addDate);
      this.form.patchValue(res);
      
      console.log(res);
      }
    )
    this.dialogRef.close(this.form.value);
    
  }

  close(){
    this.dialogRef.close();
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
