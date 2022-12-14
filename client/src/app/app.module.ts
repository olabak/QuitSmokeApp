import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AchievementComponent } from './achievement/achievement.comonent';
import { TheoryComponent } from './theory/theory.component';
import { NotebookComponent } from './notebook/notebook.component';
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
import { BenefitsComponent } from './theory/benefits/benefits.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { environment } from '../environments/environment';
import { TreatmentComponent } from './theory/treatment/treatment.component';
import { WeightComponent } from './theory/weight/weight.component';
import { PassiveSmokingComponent } from './theory/passive-smoking/passive-smoking.component';
import { ReasonsComponent } from './theory/reasons/reasons.component';
import { DiagnosticComponent } from './theory/diagnostic/diagnostic.component' 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    AchievementComponent,
    TheoryComponent,
    NotebookComponent,
    MotivationComponent,
    ProfileComponent,
    QuizComponent,
    QuizQuestionComponent,
    NotebookFormComponent,
    MalignancyComponent,
    FactMythComponent,
    MechanismComponent,
    BenefitsComponent,
    PopUpComponent,
    TreatmentComponent,
    WeightComponent,
    PassiveSmokingComponent,
    ReasonsComponent,
    DiagnosticComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    SharedModule,
    ReactiveFormsModule,
    MatTableModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }