import { API_BASE_URL, USD_UUID } from '../utils/constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';

export const TIME_PERIOD_KEY = {
  '15 m': '1h',
  '1 h':'1h',
  '1 d':'24h',
  '1 w':'7d',
  '1 m':'30d' ,
}

@Injectable({
	providedIn: 'root',
})
export class CoinService {
	constructor(private http: HttpClient) {}

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'X-RapidAPI-Key': '2a56082752mshed424cfa795b267p1391d0jsne7ef4935f478',
			'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
		}),
	};

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
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

	getCoinHistory(coinUuid: string, timePeriod: keyof typeof TIME_PERIOD_KEY = '1 h') {
    const period = TIME_PERIOD_KEY[timePeriod]
		let url = `${API_BASE_URL}/coin/${coinUuid}/history?referenceCurrencyUuid=${USD_UUID}&timePeriod=${period}`;
		return this.http.get<CoinHistoryApiResponse>(url, this.httpOptions).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );;
	}
}

export interface CoinHistory {
  price: string;
  timestamp: number;
}

export interface Data {
  change: string;
  history: CoinHistory[];
}

export interface CoinHistoryApiResponse {
  status: string;
  data: Data;
}
