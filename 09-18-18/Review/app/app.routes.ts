import {Routes} from '@angular/router'
import {AboutComponent} from './about/about.component'
import { SubmitComponent } from './submit/submit.component';
import { TriviaComponent } from './trivia/trivia.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'submit', component: SubmitComponent},
    {path: 'trivia', component: TriviaComponent},
    {path: '**', redirectTo: 'about'}
]