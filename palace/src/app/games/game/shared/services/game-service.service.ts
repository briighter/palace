import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameHistory } from 'src/app/shared/models/game-history';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  endpoint = '';

  constructor(private http: HttpClient) { }

  getGameHistory() {
    return this.http.get<GameHistory>(this.endpoint);
  }

  postGameHistory(data) {
    this.http.post<GameHistory>(this.endpoint, data);
  }
}