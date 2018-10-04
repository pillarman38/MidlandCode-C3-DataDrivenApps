import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { greenTransition } from '../shared/animations';
import { bannedWordValidation } from '../shared/validators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [greenTransition]
})
export class TodoComponent implements OnInit {
  todoForm : FormGroup;
  todos: Object[];
  constructor(private todoService: TodoService) {
    this.todos = this.todoService.todos;
   }

  get name(){
    return this.todoForm.get('name')
  }

  get category(){
    return this.todoForm.get('category')
  }

  addTodo(){
    if(this.todoForm.valid){
      this.todoService.addTodo(Object.assign({}, this.todoForm.value))
      this.todoForm.reset({'name': '', 'category': ''});
    }
    else{
      this.todoForm.get('name').markAsTouched()
      this.todoForm.get('category').markAsTouched()
    }
  }

  toggleTodo(id){
    this.todoService.toggleTodo(id);
  }

  ngOnInit() {
    this.todoForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'category': new FormControl('', [Validators.required, bannedWordValidation('nothing')])
    })

    
  }

}
