import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Object[];
  
  constructor(private todoService: TodoService) 
  {
    this.todos = this.todoService.getTodos();
   }

   addTodo(todo){
     this.todoService.addTodo(todo);
   }

   deleteTodo(idx){
    this.todoService.deleteTodo(idx);
   }

  ngOnInit() {
  }

}
