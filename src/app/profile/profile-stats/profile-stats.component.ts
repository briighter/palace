import { Component, OnInit } from '@angular/core';

export interface GameHistory {
  game: string;
  numberOfItems: number;
  numberofSeconds: number;
  result: string;
}

@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrls: ['./profile-stats.component.scss'],
})
export class ProfileStatsComponent implements OnInit {
  gameStats: GameHistory[] = [
    {
      game: 'numbers',
      numberOfItems: 4,
      numberofSeconds: 20,
      result: 'w'
    },
    {
      game: 'numbers',
      numberOfItems: 5,
      numberofSeconds: 10,
      result: 'w'
    },
    {
      game: 'numbers',
      numberOfItems: 6,
      numberofSeconds: 10,
      result: 'w'
    },
    {
      game: 'numbers',
      numberOfItems: 10,
      numberofSeconds: 10,
      result: 'l'
    },
    {
      game: 'letters',
      numberOfItems: 5,
      numberofSeconds: 10,
      result: 'w'
    },
  ];

  constructor() { }

  ngOnInit() { }

}
