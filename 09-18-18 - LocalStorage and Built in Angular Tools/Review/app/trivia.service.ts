import { Injectable } from '@angular/core';
declare var require: any
@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  triviaQuestions: Object[] = require('../assets/questions.json');
  idx: number = 9;
  constructor() { }

  getRandomQuestions(){
    this.shuffleQuestions();
    let questions = this.triviaQuestions.slice(0,4);
    return questions.map((q:Object)=>{
      let formatted = {id: q['id'], q: q['q'], a: q['wrongAnswers'].slice()}
      formatted['a'].push(q['correctAnswer']);
      formatted['a'] = this.shuffle(formatted['a']);
      return formatted
    })
  }

  addQuestion(q){
    if(!q['q'].endsWith('?')){
      q['q'] += '?';
    }
    q.id = this.idx;
    this.triviaQuestions.push(q);
    this.idx++;
  }

  checkAnswer(id: number, answer: string){
    let question = this.triviaQuestions.find(q=> q['id'] === id);
    if(question['correctAnswer'] === answer){
      return {isCorrect: true}
    }
    return {q: question['q'], correct: question['correctAnswer'], guess: answer, isCorrect: false }
    
  }

  shuffle(a: Array<any>){
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }

  shuffleQuestions(){
    this.triviaQuestions = this.shuffle(this.triviaQuestions);
  }
}
