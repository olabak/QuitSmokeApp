import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  registerMode = false;

  constructor(public accountService: AccountService,private router: Router, private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialogRef.open(PopUpComponent, {
      data: { couse: 'austin' },
    });
  }



  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('');
    }, error => {
      console.log(error);
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  
}
