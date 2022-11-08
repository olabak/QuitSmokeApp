import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Note } from '../_models/note';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<Note>(1);
  // currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }
//To będzie lista i czy to obsłużyć w ts componentu - mapowanie?
  listByUserId(userId: number) {
    return this.http.get(this.baseUrl + `Note/listByUserid?userId=${userId}`);
  }

  updateNote(dto: Note) {
    return this.http.put(this.baseUrl + `Note/update`, dto);
  }

  addNote(dto: Note) {
    return this.http.post(this.baseUrl + `Note/add`, dto);
  }
}

