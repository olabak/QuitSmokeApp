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
 

  constructor(private http: HttpClient) { }

  listByUserId(userId: number) {
    return this.http.get(this.baseUrl + `History/listByUserid?userId=${userId}`);
  }

  lastHistoryByUserId(userId: number) {
    return this.http.get(this.baseUrl + `History/lastHistoryByUserId?userId=${userId}`);
  }
  
  addHistory(dto: History) {
    return this.http.post(this.baseUrl + `History/add`, dto);
  }
}

