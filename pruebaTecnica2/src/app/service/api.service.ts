import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'https://api.themoviedb.org/3/movie/76341?api_key';

  constructor(private http: HttpClient) { }

  // Show lists of item
  list(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Create new item
  getItem(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Search By Name
  filterByName(name: any): Observable<any> {
    return this.http.get(`${this.apiUrl}?name_like=${name}`).pipe(
      catchError(this.handleError)
    );
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  returnFilm(id: any) {
    return this.http.get(this.apiUrl + "movie/" + id)
  }

}
