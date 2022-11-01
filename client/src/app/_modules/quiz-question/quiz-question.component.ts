import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {
@Input() number = '';
@Input() content: any;
@Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
