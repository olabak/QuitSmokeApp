import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notebook-form',
  templateUrl: './notebook-form.component.html',
  styleUrls: ['./notebook-form.component.css']
})
export class NotebookFormComponent implements OnInit {
  notebookForm: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.initializeForm()
  }

  onSubmit(){
    
  }

  private initializeForm() {
    this.notebookForm = new FormGroup({
      'mood': new FormControl(),
      'moodDescription': new FormControl(),
      'symptom': new FormControl(null),
      'symptomDescription': new FormControl(null),
      'description': new FormControl(null)
    });

}
}
