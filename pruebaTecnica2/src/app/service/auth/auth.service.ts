import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_URL = 'https://api.themoviedb.org/3/movie/76341?api_key=e137afe119570b6a381023d96647b58b';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any = null;
  constructor(private http:HttpClient) { }

  login():Observable<any>{


    return this.http.post(AUTH_URL + JSON.stringify(this.user), { headers: { 'Content-Type': 'application/json'}});
  }

  getUser(username:string):Observable<any>{
    return this.http.get(AUTH_URL + 'users/' + username);
  }
}
