import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from './stores/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User
  constructor(private http: HttpClient) { }

  getUsers(id): Observable<User>{
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .pipe(
      map(res => res),
      tap(res=> this.user = res),
      catchError(() => of(
        {error: `User not Found, please try a different id. 
        If you feel you got this message by mistake, please try again later. 
        If the problem persists, contact a system administrator`}))
    )    

  }
}
