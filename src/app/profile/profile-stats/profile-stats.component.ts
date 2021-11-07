import { Component, OnInit } from '@angular/core';

export interface GameHistory {
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
  gameStats: GameHistory[] = [
    game: '',
  ];

  constructor() { }

  ngOnInit() { }

}
