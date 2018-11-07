import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  constructor() { }

  retrieve(): Object[]{
    return JSON.parse(localStorage.getItem('selections'));
  }

  update(val){
    localStorage.setItem('selections', JSON.stringify(val))
  }

  completePayment(paymentInfo, selections){
    console.log("Paying for:", selections);
    console.log("Payment Info:", paymentInfo);
  }
}
