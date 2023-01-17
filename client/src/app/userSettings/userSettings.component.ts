import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../_models/user';
import { UserSetting } from '../_models/userSettings';
import { AccountService } from '../_services/account.service';
import { UserSettingsService } from '../_services/userSettings.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './userSettings.component.html',
  styleUrls: ['./userSettings.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  userSetting: UserSetting = null;
  lastCigarrete: number = Date.now();
  
  

  constructor(private _service: UserSettingsService, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm(); 
    this.getUserSetting(); 
  }
  
  onSubmit() {
    this._service.UpdateUserSetting({...this.profileForm.value, Id: this.userSetting.id}).subscribe(
      (res: UserSetting) => 
    { 
      this.userSetting = res;
      this.profileForm.patchValue(res);
      this.profileForm.get('lastSmokeDate').patchValue(this.formatDate(res.lastSmokeDate));
      this.router.navigate(['motivation']);
    });
  }

  private getUserSetting(): void {
    this._service.getById(JSON.parse(localStorage.getItem('user')).id).subscribe((res: UserSetting) => 
    { 
      this.userSetting = res;
      this.profileForm.patchValue(res);
      console.log(this.profileForm.get('lastSmokeDate').value);
    });
  }

 
  
  private initializeForm() {
    this.profileForm = new FormGroup({
      'lastSmokeDate': new FormControl('',Validators.required),
      'numbersOfCigarettes': new FormControl(),
      'yearsOfSmoking': new FormControl(null),
      'priceOfPacket': new FormControl(null)
    });
}

private formatDate(date) {
  const d = new Date(date);
  let month = '' + (d.getDate())
  let day = '' + d.getDate();
  const year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}

}
