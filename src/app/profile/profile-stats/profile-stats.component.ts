import { Component, OnInit } from '@angular/core';

interface gameHistory {
  game: string;
  numberOfItems: string;
  numberofSeconds: string;
  result: string;
}

@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrls: ['./profile-stats.component.scss'],
})
export class ProfileStatsComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {}

}
