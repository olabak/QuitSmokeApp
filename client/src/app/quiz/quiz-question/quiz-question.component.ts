import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {
@Input() number = '';
@Input() content: any;
@Input() name: string;
values: any = [
  'TAK',
  'NIE'
];

@Output() selectedOption = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  radioChangeHandler(event: any){
    this.selectedOption.emit(event)
  }

}
