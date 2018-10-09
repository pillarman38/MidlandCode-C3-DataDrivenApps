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
  user: User | User[];
  todos: Todo[] = []
  constructor(private actr: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.user = this.actr.snapshot.data['user'];
    if(!this.user['error'] && !(this.user instanceof Array)){
        this.todoService.getTodosByUserId(this.user['id']).subscribe(todos => this.todos = todos)
    }
  }

}
