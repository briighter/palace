import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameHistory } from 'src/app/shared/models/game-history';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  gameStats: GameHistory;

  constructor(private http: HttpClient) { }
}
