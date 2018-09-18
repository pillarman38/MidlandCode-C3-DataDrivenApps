import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'trivia-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Output() restartEvent = new EventEmitter<null>();
  @Input() numCorrect: number;
  @Input() incorrectGuesses: Object[];
  constructor() { }

  restart(){
    this.restartEvent.emit();
  }

  getResponse(){
    return this.numCorrect === 4 ? "Outstanding job! You're really smart" : "Better luck next time tiger!";
  }
  ngOnInit() {
  }

}
