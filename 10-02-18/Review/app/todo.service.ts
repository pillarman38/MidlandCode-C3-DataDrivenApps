import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Object[] = [];
  nextId = 0;
  constructor() { }

  addTodo(todo: Object){
    this.todos.push(Object.assign({completed: false, id: this.nextId}, todo))
    this.nextId++;
  }

  toggleTodo(idx){
    this.todos[idx]['completed'] = !this.todos[idx]['completed'];
  }

}
