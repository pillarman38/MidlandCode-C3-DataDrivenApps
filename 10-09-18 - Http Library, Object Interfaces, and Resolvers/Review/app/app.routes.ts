import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';
import { UserResolver } from './user.resolver';

export const routes: Routes = [    
    {path: '', component: HomeComponent},
    {path: 'users/:id', component: UserComponent, resolve: {user: UserResolver}},
    {path: 'todos/:id', component: TodoComponent},
    {path: '**', redirectTo: ''}
]