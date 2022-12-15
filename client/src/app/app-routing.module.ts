import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementComponent } from './achievement/achievement.comonent';
import { HomeComponent } from './home/home.component';
import { MotivationComponent } from './motivation/motivation.component';
import { NotebookFormComponent } from './notebook/notebook-form/notebook-form.component';
import { NotebookComponent } from './notebook/notebook.component';
import { ProfileComponent } from './userSettings/userSettings.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { FactMythComponent } from './theory/fact-myth/fact-myth.component';
import { MalignancyComponent } from './theory/malignancy/malignancy.component';
import { TheoryComponent } from './theory/theory.component';
import { MechanismComponent } from './theory/mechanism/mechanism.component';
import { TreatmentComponent } from './theory/treatment/treatment.component';
import { WeightComponent } from './theory/weight/weight.component';
import { BenefitsComponent } from './theory/benefits/benefits.component';
import { PassiveSmokingComponent } from './theory/passive-smoking/passive-smoking.component';
import { ReasonsComponent } from './theory/reasons/reasons.component';
import { DiagnosticComponent } from './theory/diagnostic/diagnostic.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'notebook', component: NotebookComponent},
  {path: 'notebook%form', component: NotebookFormComponent},
  {path: 'achievement', component: AchievementComponent},
  {path: 'theory', component: TheoryComponent},
  {path: 'motivation', component: MotivationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'theory/malignancy', component: MalignancyComponent},
  {path: 'theory/facts?myths', component: FactMythComponent},
  {path: 'theory/mechanism', component: MechanismComponent},
  {path: 'theory/benefits', component: BenefitsComponent},
  {path: 'theory/treatment', component: TreatmentComponent},
  {path: 'theory/weight', component: WeightComponent},
  {path: 'theory/passive-smoking', component: PassiveSmokingComponent},
  {path: 'theory/reasons', component: ReasonsComponent},
  {path: 'theory/diagnostic', component: DiagnosticComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
