import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserSetting } from '../_models/userSettings';
import { UserSettingsService } from '../_services/userSettings.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  userSetting: UserSetting = null;
  // =>dto

  constructor(private _service: UserSettingsService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getUserSetting();
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
      this.profileForm.get('lastSmokeDate').patchValue(new Date(res.latSmokeDate));
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
      'lastSmokeDate': new FormControl(Validators.required),
      'numbersOfCigarettes': new FormControl(),
      'yearsOfSmoking': new FormControl(null),
      'priceOfPacket': new FormControl(null)
    });

}
}
