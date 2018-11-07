import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  newTodo: Object = {username: '', todo: ''}
  @Output() addTodoEvent = new EventEmitter<Object>();
  constructor() { }
  addTodo(){
    this.addTodoEvent.emit(this.newTodo);
    this.newTodo = {username: this.newTodo['username'], todo: this.newTodo['todo']};
  }

  ngOnInit() {
  }

}
