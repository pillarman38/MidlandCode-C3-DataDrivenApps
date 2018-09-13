import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Object[] = [];
  idx: number = 0;
  constructor() { }

  getTodos(){
    return this.todos;
  }

  getTodosByUser(user:string){
    return this.todos.filter(val => val['username'].toLowerCase() == user.toLowerCase())
  }

  addTodo(todo){
    todo.id = this.idx;
    this.todos.push(todo)
    this.idx++;
  }
  
  deleteTodo(id){
    let index = this.todos.findIndex((val)=>{
      return val['id'] == id;
    })
    this.todos.splice(index, 1);

  }

}
