import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Object[] = []
  newText: string = "";
  user: Object
  error: Object = {}
  constructor(private todoService: TodoService, private userService: UserService) { 
    this.user = this.userService.user;
  }

  getTodos(id){
    this.todoService.getByUser(id).subscribe(
      res=>{
      if(res['err']) {
        this.error['err'] = res['err'].error.err;
      }
      else{
        this.todos = res;
      }
    })
  }
  addTodo(){
    this.error = {};
    if(this.newText.length > 3){
      let newTodo = {text: this.newText, completed: false, userID: this.user['id']}
      this.todoService.addTodo(newTodo).subscribe(
        res=>{
          
          if(res['err']) this.error['err'] = res['err'].error.err;
          else{
          this.getTodos(this.user['id'])
          }
        })
    }
    else{
      this.error['err'] = 'Todo name too short'
    }
  }
  ngOnInit() {
    console.log(this.user);
    this.getTodos(this.user['id'])
  }

}
