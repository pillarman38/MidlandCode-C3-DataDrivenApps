import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { ListTodosComponent } from './todos/list-todos/list-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    UsersComponent,
    AddTodoComponent,
    ListTodosComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
