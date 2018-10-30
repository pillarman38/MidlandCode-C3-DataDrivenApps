import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  
  get user(){
    return JSON.parse(localStorage.getItem('user'));
  }

  getAll(){
    return this.http.get('/users/all').pipe(
      map(res => res['success']),
      catchError(err => {
        console.log(err)
        return of({err: err})})
    )
  }

  getById(id){
    return this.http.get(`/users/${id}`).pipe(
      map(res => res['success']),
      catchError(err => {
        console.log(err)
        return of({err: err})})
    )
  }

  signup(pswd, username){
    return this.http.post('/users/signup', {username: username, password: pswd})
    .pipe(
    map(res => res['success']),
    catchError(err => {
      console.log(err)
      return of({err: err})})
    )
  }

  login(pswd, username){
    return this.http.post('/users/login', {username: username, password: pswd})
    .pipe(

      map(res =>{
        console.log(res);
        if(res['success']){
          localStorage.setItem('user', JSON.stringify({username: res['success'].username, id: res['success'].id}))
        }
        return res;
      }),
    catchError(err => {
      console.log(err)
      return of({err: err})})
    )
  }

  logout(){
    localStorage.clear();
  }


}
