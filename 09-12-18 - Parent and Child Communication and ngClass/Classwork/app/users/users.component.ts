import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  todos: Object[];

  constructor(private todoService: TodoService, private activeRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    let user = this.activeRoute.snapshot.params.username
    this.todos = this.todoService.getTodosByUser(user);
    
  }

}
