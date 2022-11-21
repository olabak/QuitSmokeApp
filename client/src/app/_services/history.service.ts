import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Note } from '../_models/note';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<History>(1);
  // currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }
//To będzie lista i czy to obsłużyć w ts componentu - mapowanie?
  listByUserId(userId: number) {
    return this.http.get(this.baseUrl + `History/listByUserid?userId=${userId}`);
  }


  addHistory(dto: History) {
    return this.http.post(this.baseUrl + `History/add`, dto);
  }
}

