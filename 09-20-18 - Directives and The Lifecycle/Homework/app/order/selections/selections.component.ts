import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'selections-component',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.css']
})
export class SelectionsComponent implements OnInit {
  @Input() selections: Object[];
  @Output() updateSelection = new EventEmitter<Object>();
  @Output() gotoPayment = new EventEmitter<null>(); 
  constructor() { }

  ngOnInit() {
  }

}
