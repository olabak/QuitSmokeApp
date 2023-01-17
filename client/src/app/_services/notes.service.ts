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
  

  constructor(private http: HttpClient) { }

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

