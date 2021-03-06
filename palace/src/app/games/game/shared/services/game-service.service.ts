import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameHistory } from 'src/app/shared/models/game-history';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  endpoint = 'http://localhost:3000/palace/gameHistory';

  constructor(private http: HttpClient) { }

  getAllGameHistory() {
    return this.http.get<GameHistory[]>(this.endpoint + '/all');
  }

  getAllGameHistoryForUser(userInfo: string) {
    return this.http.get<GameHistory[]>(this.endpoint + '/all/user', {
      params: {email: userInfo}
    });
  }

  postGameHistory(gameData: GameHistory) {
    console.log('Post game data...');
    console.log(gameData);

    this.http.post<GameHistory>(this.endpoint + '/create', gameData)
      .subscribe(
        data => {
          console.log('POST has been initiated for game data', data);
        },
        () => this.handleError,
        () => {
          console.log('POST has been finished');
        })
      .unsubscribe();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
