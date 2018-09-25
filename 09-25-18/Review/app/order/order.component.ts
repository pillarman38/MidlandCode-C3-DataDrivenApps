import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  selectingOptions: boolean = true;
  selections: Object[];
  constructor(private orderService: OrderService, private router: Router) {
    this.selections = this.orderService.retrieve() || []
  }
  toggleView(bool){
    this.selectingOptions = bool;
  }

  updateSelection(pizza){
    this.selections.push(pizza);
    this.orderService.update(this.selections);
  }

  removePizza(idx){
    if(idx === -1){
      this.selections = []
    }
    else{
      this.selections.splice(idx,1);
    }
    this.orderService.update(this.selections);
  }


  completePayment(info){
    this.orderService.completePayment(info, this.selections);
    this.orderService.update([]);
    this.router.navigate(['/locations'])
    
  }

  ngOnInit() {
  
  }

}
