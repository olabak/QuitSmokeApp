import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementComponent } from './achievement/achievement.component';
import { GuidanceComponent } from './guidance/guidance.component';
import { HomeComponent } from './home/home.component';
import { MotivationComponent } from './motivation/motivation.component';
import { NotebookComponent } from './notebook/notebook.component';
import { ProfileComponent } from './profile/profile.component';
import { QuizComponent } from './quiz/quiz.component';
import { TheoryComponent } from './theory/theory.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'notebook', component: NotebookComponent},
  {path: 'achievement', component: AchievementComponent},
  {path: 'guidance', component: GuidanceComponent},
  {path: 'theory', component: TheoryComponent},
  {path: 'motivation', component: MotivationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'quiz', component: QuizComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
