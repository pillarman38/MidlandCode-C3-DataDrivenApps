import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Todo } from './stores/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {}

  getTodoById(id): Observable<Todo>{
    return this.getTodos(`/${id}`).pipe(
      map(res => res as Todo))
  }

  getTodosByUserId(userId): Observable<Todo[]>{
    return <Observable<Todo[]>>this.getTodos(`?userId=${userId}`)
  }

  getAllTodos(): Observable<Todo[]>{
    return <Observable<Todo[]>>this.getTodos(`/`);
  }

  private getTodos(queryString): Observable<Todo[] | Object>{
    return this.http.get(`https://jsonplaceholder.typicode.com/todos${queryString}`)
    .pipe(
      map(res => res as Todo[]),
      catchError(() => of(
        {error: `User not Found, please try a different id. 
        If you feel you got this message by mistake, please try again later. 
        If the problem persists, contact a system administrator`}))
    )    
  }
}
