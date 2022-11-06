import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Note } from '../_models/note';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<Note>(1);
  // currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }
//To będzie lista i czy to obsłużyć w ts componentu - mapowanie?
  getById(userId: number) {
    return this.http.get(this.baseUrl + `UserSetting/getById?userId=${userId}`);
  }

  UpdateUserSetting(dto: Note) {
    return this.http.put(this.baseUrl + `UserSetting/update`, dto);
  }
}