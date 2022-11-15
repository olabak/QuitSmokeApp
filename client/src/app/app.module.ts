import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AchievementComponent } from './achievement/achievement.component';
import { TheoryComponent } from './theory/theory.component';
import { NotebookComponent } from './notebook/notebook.component';
import { GuidanceComponent } from './guidance/guidance.component';
import { MotivationComponent } from './motivation/motivation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from './_modules/shared.module';
import { ProfileComponent } from './userSettings/userSettings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizComponent } from './quiz/quiz.component';
import { QuizQuestionComponent } from './quiz/quiz-question/quiz-question.component';
import { NotebookFormComponent } from './notebook/notebook-form/notebook-form.component';
import { MatTableModule } from '@angular/material/table';
import { MalignancyComponent } from './theory/malignancy/malignancy.component';
import { FactMythComponent } from './theory/fact-myth/fact-myth.component';
import { MechanismComponent } from './theory/mechanism/mechanism.component';
import { BenefitsComponent } from './theory/benefits/benefits.component' 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    AchievementComponent,
    TheoryComponent,
    NotebookComponent,
    GuidanceComponent,
    MotivationComponent,
    ProfileComponent,
    QuizComponent,
    QuizQuestionComponent,
    NotebookFormComponent,
    MalignancyComponent,
    FactMythComponent,
    MechanismComponent,
    BenefitsComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    SharedModule,
    ReactiveFormsModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }