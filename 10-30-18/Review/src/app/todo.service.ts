import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get('/todos/all').pipe(
      map(res => res['success']),
      catchError(err => {
        console.log(err)
        return of({err: err})})
    )
  }

  getByUser(id){
    return this.http.get(`/todos/byUser/${id}`).pipe(
      map(res => res['success']),
      catchError(err => {
        console.log(err)
        return of({err: err})})
    )
  }

  addTodo(todo){
    return this.http.post('/todos/add', todo)
    .pipe(
    map(res => res['success']),
    catchError(err => {
      console.log(err)
      return of({err: err})})
    )
  }
  editTodo(id, updates){
    return this.http.post(`/todos/edit/${id}`, updates)
    .pipe(
      map(res => res['success']),
      catchError(err => {
        console.log(err)
        return of({err: err})})
      )
  }
}
