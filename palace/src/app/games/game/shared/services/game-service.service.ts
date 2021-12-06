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

  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getAllGameHistory() {
    return this.http.get<GameHistory[]>(this.endpoint + '/all');
  }

  // postGameHistory(data: GameHistory) {
  //   console.log('Posting game data...');
  //   console.log(data);
  //   this.http.post<GameHistory>(this.endpoint + '/create', data);
  // }
  postGameHistory(gameData: GameHistory): Observable<GameHistory> {
    console.log('Post game data...');

    return this.http.post<GameHistory>(this.endpoint + '/create', JSON.stringify(gameData), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
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
