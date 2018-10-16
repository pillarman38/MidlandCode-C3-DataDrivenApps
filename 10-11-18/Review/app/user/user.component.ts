import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../stores/user';
import { TodoService } from '../todo.service';
import { Todo } from '../stores/todo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  todos: Todo[] = []

  constructor(private actr: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.actr.data.subscribe(data=>{
      this.user = data.user
    if(!this.user.error && !(this.user instanceof Array)){
      this.todos = [];
        this.todoService.getTodosByUserId(this.user.id).subscribe(todos => this.todos = todos)
    }
    })
    
  }

}
