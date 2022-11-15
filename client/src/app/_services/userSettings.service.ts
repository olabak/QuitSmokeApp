import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { UserSetting } from '../_models/userSettings';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<UserSetting>(1);
  // currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  getById(userId: number) {
    return this.http.get(this.baseUrl + `UserSetting/getById?userId=${userId}`);
  }

  UpdateUserSetting(dto: UserSetting) {
    return this.http.put(this.baseUrl + `UserSetting/update`, dto);
  }

  UpdateUserMotivation(dto: UserSetting){
    return this.http.put(this.baseUrl + `UserSetting/updatemotivation`, dto);
  }

  UpdateUserQuizScore(dto: any){
    return this.http.put(this.baseUrl + `UserSetting/updatequizscore`, dto);
  }

  // login(model: any) {
  //   return this.http.post(this.baseUrl + 'account/login', model).pipe(
  //     map((response: User) => {
  //       const user = response;
  //       if (user) {
  //         localStorage.setItem('user', JSON.stringify(user));
  //         this.currentUserSource.next(user);
  //       }
  //     })
  //   )
  // }

  

  //https://localhost:5001/api/account/register

  //https://localhost:5001/api/UserSetting/getById?userId=2

//   [HttpPut, Route("update")]
//   public async Task<ActionResult> UpdateUserSettingAsync([FromBody] UserSettingDto model)
//   {
//       //ValidateStrings(model.Id);

//       return Ok(await UserSettingManager.UpdateAsync(model));
//   }

// public async Task<ActionResult> GetUserSettingAsync(int userId)
//   {
//       //ValidateStrings(companyId);
//       return Ok(await UserSettingManager.GetUserSettingAsync(userId));
//   }






  // register(model: any) {
  //   return this.http.post(this.baseUrl + 'account/register', model).pipe(
  //     map((user: User) => {
  //       if (user) {
  //         localStorage.setItem('user', JSON.stringify(user));
  //         this.currentUserSource.next(user);
  //       }
  //     })
  //   )
  // }

  // setCurrentUser(user: User) {
  //   this.currentUserSource.next(user);
  // }

  // logout() {
  //   localStorage.removeItem('user');
  //   this.currentUserSource.next(null);
  // }
}