import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Question } from '../_models/question';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  public questions: Question[] = [
    { number : 1,
      content:"Czy chcesz rzucić palenie tytoniu?",
      name:"question1"},
    {
      number: 2,
      content:"Czy decydujesz się na to dla siebie samej/samego ? (podkreśl TAK) Czy dla kogoś innego np. dla rodziny? ( podkreśl NIE)",
      name:"question2",
    },
    {
      number: 3,
      content:"Czy podejmowałaś już próby rzucenia palenia?",
      name:"question3",
    },
    {
      number: 4,
      content:"Czy orientujesz się w jakich sytuacjach palisz najczęściej?",
      name:"question4",
    },
    {
      number: 5,
      content:"Czy wiesz dlaczego palisz tytoń?",
      name:"question5",
    },
    {
      number: 6,
      content:"Czy mogłabyś/mógłbyś liczyć na pomoc rodziny , przyjaciółtp. Gdybyś chciała rzucić palenie?",
      name:"question6",
    },
    {
      number: 7,
      content:"Czy członkowie Twojej rodziny są osobami niepalącymi?",
      name:"question7",
    },
    {
      number: 8,
      content:"Czy w miejscu w którym pracujesz nie pali się tytoniu?",
      name:"question8",
    },
    {
      number: 9,
      content:"Czy jesteś zadowolony ze swojej pracyi trybu życia?",
      name:"question9",
    },
    {
      number: 10,
      content:"Czy orientujesz się ,gdzie i w jaki sposób szukać pomocy,gdybyś miał(a) problemy z utrzymaniem abstynencji?",
      name:"question10",
    },
    {
      number: 11,
      content:"Czy wiesz na jakie pokusy i trudności będziesz narażony(a) w okresie abstynencji?",
      name:"question11",
    },{
      number: 12,
      content:"Czy wiesz, w jaki sposób samej/samemu sobie poradzić w sytuacjach kryzysowych?",
      name:"question12",
    }

  ] ;

  answer = new Array(12).fill('');
  answer2 = new Array(12).fill('');
  score = 0;
  level: string = '';
  submited: boolean =false;
  

  constructor() { }

  ngOnInit(): void {
    
    
  }

  onSubmit(){
    this.getScore(this.answer);
    this.submited = true;
  }

  setAnswer(value: 'TAK' | 'NIE', answerNumber: number) : void {
    this.answer[answerNumber]=value;
  }

  getScore(answer: any){
    for(let i =0; i< answer.length;i++){
      if(answer[i]=== 'TAK')
      {
        this.score++;
      }
      
    }
    if(this.score>6){
      this.level = 'wysokim';
    }
    else{
      this.level = 'niskim';
    }
    
  }
}

  // radioChangeHandler(value: string): void{
  //   console.log(value)
  //   this.answer.push(value);
  //   console.log(this.answer);
  // }


