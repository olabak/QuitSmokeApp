import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { UserSettingsService } from '../_services/userSettings.service';
import { UserSetting } from '../_models/userSettings';
import { CloseScrollStrategy } from '@angular/cdk/overlay';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  userSetting: UserSetting = null;
  numbersOfCigarettes: number;
  lastSmokeDate: Date;
  yearsOfSmoking: number;
  priceOfPacket: number;
  daysOffSmoke: number;
  today: Date = new Date();
  diff: number;
  value1 = "1/1/2000";
  value2 = "1/1/2001";
  

  constructor(public accountService: AccountService, private userService: UserSettingsService) { }

  ngOnInit(): void {
    this.getUserSetting()
    
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }


  private getUserSetting(): void {
      this.userService.getById(JSON.parse(localStorage.getItem('user')).id).subscribe((res: UserSetting) => 
      { 
        this.userSetting = res;
        this.numbersOfCigarettes = res.numbersOfCigarettes;
        this.lastSmokeDate = res.lastSmokeDate;
        this.priceOfPacket = res.priceOfPacket;
        this.yearsOfSmoking = res.yearsOfSmoking;
        console.log(res.lastSmokeDate);
        this.diff = Math.floor((Date.parse(this.today.toString()) - Date.parse(this.lastSmokeDate.toString())) / 86400000);
        console.log(this.diff)
      });
  }

  
  
      
         
  
  // }

  // this._settings.editParameter('category', result).subscribe(
  //   (res) => {
  //     this.projectCostCategory = this.projectCostCategory.map((category) =>
  //       category.Id === res.Id ? (category = res) : category,
  //     );
  //     this.costCategory = new MatTableDataSource<iProjectCostCategory>(this.projectCostCategory);
  //     this._global.showSnackResponseMsg('global.snackBar.editSuccess');
  //   },

  // private getUserSetting(): void {
  //   this._service.getById(2).subscribe((res: UserSetting) => 
  //   { 
  //     console.log(res);
  //     this.userSetting = res;
  //     this.profileForm.patchValue(res);
  //     console.log(this.profileForm.get('lastSmokeDate').value);
  //     this.profileForm.get('lastSmokeDate').patchValue(this.formatDate(res.lastSmokeDate));
  //   });
  }


