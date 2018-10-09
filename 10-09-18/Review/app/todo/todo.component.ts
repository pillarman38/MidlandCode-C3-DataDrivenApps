import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../stores/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    if(this.route.snapshot.params['id'] === 'all'){
      this.todoService.getAllTodos().subscribe(todos => this.todos = todos)
    }
    else{
      this.todoService.getTodoById(this.route.snapshot.params['id']).subscribe(todos => this.todos = [todos])
    }
  }

}
