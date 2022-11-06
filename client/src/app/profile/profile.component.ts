import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../_models/user';
import { UserSetting } from '../_models/userSettings';
import { AccountService } from '../_services/account.service';
import { UserSettingsService } from '../_services/userSettings.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  userSetting: UserSetting = null;
  lastCigarrete: number = Date.now();
  
  
  
  // =>dto

  constructor(private _service: UserSettingsService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getUserSetting();
    console.log(this.lastCigarrete)
  }
  
  onSubmit() {
    this._service.UpdateUserSetting({...this.profileForm.value, Id: this.userSetting.id}).subscribe(
      (res: UserSetting) => 
    { 
      console.log(res);
      this.userSetting = res;
      this.profileForm.patchValue(res);
    });
  }

  private getUserSetting(): void {
    this._service.getById(2).subscribe((res: UserSetting) => 
    { 
      console.log(res);
      this.userSetting = res;
      this.profileForm.patchValue(res);
      console.log(this.profileForm.get('lastSmokeDate').value);
      this.profileForm.get('lastSmokeDate').patchValue(this.formatDate(res.lastSmokeDate));
    });
  }

  // getDescriptionList(): void {
  //   this._settings.getParametersList('description', this._global.globalVariables.CompanyId, this.fetchParams).subscribe(
  //     (res) => {
  //       this.descriptionParameters = [...this.descriptionParameters, ...res];
  //       this.descriptionData = new MatTableDataSource<dtoNameType>(this.descriptionParameters);
  //     },
  //     (err) => this._global.showHttpErrorResponse(err),
  //   );
  // }
  
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
  let month = '' + (d.getDate()+1)
  let day = '' + d.getDate();
  const year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
  
}
}
