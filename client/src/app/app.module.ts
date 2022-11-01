import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AchievementComponent } from './achievement/achievement.component';
import { TheoryComponent } from './theory/theory.component';
import { NotebookComponent } from './notebook/notebook.component';
import { GuidanceComponent } from './guidance/guidance.component';
import { MotivationComponent } from './motivation/motivation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from './_modules/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizComponent } from './quiz/quiz.component';
import { QuizQuestionComponent } from './_modules/quiz-question/quiz-question.component';




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
    QuizQuestionComponent
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    SharedModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }