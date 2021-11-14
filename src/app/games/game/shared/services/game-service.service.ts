import { Injectable } from '@angular/core';
import { GameHistory } from 'src/app/shared/models/game-history';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  gameStats: GameHistory;

  constructor() { }
}
