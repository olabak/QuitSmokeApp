import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementComponent } from './achievement/achievement.component';
import { GuidanceComponent } from './guidance/guidance.component';
import { HomeComponent } from './home/home.component';
import { MotivationComponent } from './motivation/motivation.component';
import { NotebookFormComponent } from './notebook/notebook-form/notebook-form.component';
import { NotebookComponent } from './notebook/notebook.component';
import { ProfileComponent } from './profile/profile.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { FactMythComponent } from './theory/fact-myth/fact-myth.component';
import { MalignancyComponent } from './theory/malignancy/malignancy.component';
import { TheoryComponent } from './theory/theory.component';
import { MechanismComponent } from './theory/mechanism/mechanism.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'notebook', component: NotebookComponent},
  {path: 'notebook%form', component: NotebookFormComponent},
  {path: 'achievement', component: AchievementComponent},
  {path: 'guidance', component: GuidanceComponent},
  {path: 'theory', component: TheoryComponent},
  {path: 'motivation', component: MotivationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'theory/malignancy', component: MalignancyComponent},
  {path: 'theory/facts?myths', component: FactMythComponent},
  {path: 'theory/mechanism', component: MechanismComponent},
  {path: 'theory/benefits', component: MechanismComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
