import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { HistoryService } from '../_services/history.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {
  displayedColumns: string[] = ['lp', 'date', 'couse', 'days'];
  dataSource: History[] = [];
  note: History = null;
  

  constructor(private _history: HistoryService,private _account: AccountService) { }

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory():void {
    this._history.listByUserId(JSON.parse(localStorage.getItem('user')).id).subscribe((res: History[]) => {
      this.dataSource = res;
      
    })};

  
}
