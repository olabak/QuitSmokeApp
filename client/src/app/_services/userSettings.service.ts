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
}