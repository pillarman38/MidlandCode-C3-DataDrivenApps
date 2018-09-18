import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'trivia-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
@Input() question: Object;
@Input() numCorrect: number;
@Output() checkAnswerEvent = new EventEmitter<Object>();
  constructor() { }

  checkAnswer(id, a){
    this.checkAnswerEvent.emit({id: id, a: a});
  }
  ngOnInit() {
  }

}
