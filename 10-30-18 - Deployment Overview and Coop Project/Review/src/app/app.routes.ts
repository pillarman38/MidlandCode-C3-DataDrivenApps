import {Routes} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TodoComponent } from './todo/todo.component';


export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'todos', component: TodoComponent},
    {path: 'signup', component: SignupComponent},
    {path: '**', redirectTo: ''},
]