import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'payment-component',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() selections: Object[];
  @Output() submitPaymentEvent = new EventEmitter<Object>();
  @Output() gotoSelectionEvent = new EventEmitter<boolean>(); 
  payment: Object = {name: '', ccNumber: '', city: '', state: '', zipcode: ''}
  constructor() { }

  get total(){
    let total = 0;
    this.selections.forEach(val=> total+=val['price'])
    return total;
    
  }
  submit(){
    this.submitPaymentEvent.emit(this.payment)
  }

  back(){
    this.gotoSelectionEvent.emit(true);
  }

  ngOnInit() {
  }

}
