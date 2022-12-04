import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Question } from '../_models/question';
import { UserSetting } from '../_models/userSettings';
import { AccountService } from '../_services/account.service';
import { UserSettingsService } from '../_services/userSettings.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  profileForm: FormGroup;
  userSetting: UserSetting = null;
  answer = new Array(12).fill('');
  quizScore = 0;
  level: string = '';
  submited: boolean =false;
  
  public questions: Question[] = [
    { number : 1,
      content:"Czy chcesz rzucić palenie tytoniu?",
      name:"question1"},
    {
      number: 2,
      content:"Czy decydujesz się na to dla siebie samej/samego? (podkreśl TAK) Czy dla kogoś innego np. dla rodziny? (podkreśl NIE)",
      name:"question2",
    },
    {
      number: 3,
      content:"Czy podejmowałeś/aś już próby rzucenia palenia?",
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
      content:"Czy mogłbyś/mógłabyś liczyć na pomoc rodziny, przyjaciół itp. Gdybyś chciał/a rzucić palenie?",
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
      content:"Czy jesteś zadowolony ze swojej pracy i trybu życia?",
      name:"question9",
    },
    {
      number: 10,
      content:"Czy orientujesz się, gdzie i w jaki sposób szukać pomocy, gdybyś miał/a problemy z utrzymaniem abstynencji?",
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

  
  

  constructor(private _service: UserSettingsService, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    
  }

  
  onSubmit(){
    
    this.getScore(this.answer);
    console.log(this.quizScore);
    this._service.UpdateUserQuizScore({quizScore: this.quizScore, id: JSON.parse(localStorage.getItem('user')).id}).subscribe(
      (res: UserSetting) => 
    { 
      this.router.navigate(['motivation']);
    });
  }


  setAnswer(value: 'TAK' | 'NIE', answerNumber: number) : void {
    this.answer[answerNumber]=value;
  }

  getScore(answer: any){
    for(let i =0; i< answer.length;i++){
      if(answer[i]=== 'TAK')
      {
        this.quizScore++;
      }
      
    }
    if(this.quizScore>6){
      this.level = 'wysokim';
    }
    else{
      this.level = 'niskim';
    }
    
  }

  
}




  

  