import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})


export class ListTodosComponent implements OnInit {
  @Input() todos: Object[];
  @Output() deleteTodoEvent = new EventEmitter<number>()
  constructor() { }
  
  deleteTodo(id){
    this.deleteTodoEvent.emit(id);
  }

  ngOnInit() {
  }

}
