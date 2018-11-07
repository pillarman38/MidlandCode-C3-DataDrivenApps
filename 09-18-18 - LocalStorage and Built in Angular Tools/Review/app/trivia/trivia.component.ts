import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';

@Component({
  selector: 'trivia-parent',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {
  questions: Object[]
  numCorrect: number = 0;
  isAnswering: boolean = true;
  activeQuestion: number = 0;
  incorrectGuesses: Object[] = [];
  constructor(private triviaService: TriviaService) {
    this.questions = this.triviaService.getRandomQuestions();
   }

  restart(){
    this.questions = this.triviaService.getRandomQuestions();
    this.activeQuestion = 0;
    this.isAnswering = true;
    this.numCorrect = 0;
    this.incorrectGuesses = [];
  }

  checkAnswer(selected: Object){
    let response = this.triviaService.checkAnswer(selected['id'], selected['a']);
    if(response.isCorrect){
      this.numCorrect++;
    }
    else{
      this.incorrectGuesses.push(response);
    }
  
    this.checkEnd();
  }

  checkEnd(){
    if(this.activeQuestion == this.questions.length-1){
      this.isAnswering = false;
      return;
    }
    this.activeQuestion++;
  }




  ngOnInit() {
  }

}
