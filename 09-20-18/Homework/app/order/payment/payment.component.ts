import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'payment-component',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() selections: Object[];
  @Output() submitPayment = new EventEmitter<Object>();
  @Output() backToSelections = new EventEmitter<null>(); 
  constructor() { }

  ngOnInit() {
  }

}
