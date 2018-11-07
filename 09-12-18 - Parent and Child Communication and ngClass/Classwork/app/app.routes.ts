import {Routes} from '@angular/router'
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';


export const routes:Routes = [
{path: 'user/:username', component: UsersComponent},
{path: 'todo', component: TodosComponent}, 
{path: '**', redirectTo: '/todo'}]