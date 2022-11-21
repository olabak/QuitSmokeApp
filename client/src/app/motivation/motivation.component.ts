import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserSetting } from '../_models/userSettings';
import { AccountService } from '../_services/account.service';
import { UserSettingsService } from '../_services/userSettings.service';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.css']
})
export class MotivationComponent implements OnInit {

  profileForm: FormGroup;
  userSetting: UserSetting = null;

  constructor(private _service: UserSettingsService, public accountService: AccountService) { }

  ngOnInit(): void {
      this.initializeForm();
      this.getUserSetting();
      
  }

  initializeForm(){
    this.profileForm = new FormGroup({
      'motivation': new FormControl(''),
  });

  }

  onSubmit() {
    this._service.UpdateUserMotivation({...this.profileForm.value, Id: JSON.parse(localStorage.getItem('user')).id}).subscribe(
      (res: UserSetting) => 
    { 
      console.log(res);
      this.userSetting = res;
      this.profileForm.patchValue(res);
    });
  }
  private getUserSetting(): void {
    this._service.getById(JSON.parse(localStorage.getItem('user')).id).subscribe((res: UserSetting) => 
    { 
      this.userSetting = res;
      this.profileForm.patchValue(res);
      
    });
  }


}
