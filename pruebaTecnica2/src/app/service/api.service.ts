import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://api.themoviedb.org/3/'

const AUTH_API = 'authentication/'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  generateAccessToken(): Observable<any> {
    return this.http.get(BASE_URL + AUTH_API + "token/new?api_key=" + "e137afe119570b6a381023d96647b58b");
  }

  generateNewSession(approvedToken: string): Observable<any> {
    return this.http.post((BASE_URL + AUTH_API + "session/new?api_key=" + approvedToken), null);
  }
}
