import { Component, OnInit } from '@angular/core';
import { GameHistory } from 'src/app/shared/models/game-history';


@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.component.html',
  styleUrls: ['./profile-stats.component.scss'],
})
export class ProfileStatsComponent implements OnInit {
  gameStats: GameHistory[] = [
    {
      gameId: 1,
      game: 'numbers',
      numberOfItems: 4,
      numberOfSeconds: 20,
      result: 'w'
    },
    {
      gameId: 2,
      game: 'numbers',
      numberOfItems: 5,
      numberOfSeconds: 10,
      result: 'w'
    },
    {
      gameId: 3,
      game: 'numbers',
      numberOfItems: 6,
      numberOfSeconds: 10,
      result: 'w'
    },
    {
      gameId: 4,
      game: 'numbers',
      numberOfItems: 10,
      numberOfSeconds: 10,
      result: 'l'
    },
    {
      gameId: 5,
      game: 'letters',
      numberOfItems: 5,
      numberOfSeconds: 10,
      result: 'w'
    },
  ];

  constructor() { }

  ngOnInit() { }

}
