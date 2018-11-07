import {Routes} from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { TodoComponent } from "./todo/todo.component";

export const routes: Routes =[
    {path: 'about', component: AboutComponent, data: {animation: 'AboutPage'}},
    {path: '', component: HomeComponent, data: {animation: 'HomePage'}},
    {path: 'todos', component: TodoComponent, data: {animation: 'TodosPage'}},
    {path: '**', redirectTo: ''}
]