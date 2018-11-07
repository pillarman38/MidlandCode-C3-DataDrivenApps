import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TriviaComponent } from './trivia/trivia.component';
import { AboutComponent } from './about/about.component';
import { SubmitComponent } from './submit/submit.component';
import { ResultsComponent } from './trivia/results/results.component';
import { QuestionsComponent } from './trivia/questions/questions.component';
import { MenuComponent } from './menu/menu.component';
import {FormsModule} from '@angular/forms'
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TriviaComponent,
    AboutComponent,
    SubmitComponent,
    ResultsComponent,
    QuestionsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
