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
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    MatDialogModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }