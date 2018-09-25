import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "selections-component",
  templateUrl: "./selections.component.html",
  styleUrls: ["./selections.component.css"]
})
export class SelectionsComponent implements OnInit {
  meats: string[] = [
    "Ham",
    "Beef",
    "Salami",
    "Pepperoni",
    "Italian Sausage",
    "Chicken",
    "Bacon"
  ];

  nonMeats: string[] = [
    "Jalapeno Peppers",
    "Onions",
    "Banana Peppers",
    "Diced Tomatoes",
    "Black Olives",
    "Mushrooms",
    "Pineapple",
    "Cheddar Cheese",
    "Green Peppers",
    "Spinach",
    "Roasted Red Peppers"
  ];
  
  onChange(topping, isChecked){
    if(isChecked){
      return this.pizza['toppings'].push(topping)
    }
    let idx = this.pizza['toppings'].indexOf(topping)
    return this.pizza['toppings'].splice(idx, 1)
  }


  pizza: Object = {size: 'small', toppings: []}
  addingPizza: boolean = true;
  @Input()
  selections: Object[];
  @Output()
  updateSelectionEvent = new EventEmitter<Object>();
  @Output()
  gotoPaymentEvent = new EventEmitter<boolean>();
  @Output() removePizzaEvent = new EventEmitter<number>();
  constructor() {}
  
  resetPizza(){
    this.addingPizza = false;
    this.pizza = {size: 'small', toppings: []};
  }
  savePizza(){
    let pizza = Object.assign({price: this.price}, this.pizza);
    console.log(pizza, this.pizza);
    this.updateSelectionEvent.emit(pizza)
    this.resetPizza();
  }

  removePizza(idx){
    this.removePizzaEvent.emit(idx)
  }
  removeAll(){
    this.removePizza(-1);
  }
  cancel(){
    this.resetPizza();
  }
  get price(){
    const sizeMap: Object = {'small': 5, 'medium': 7, 'large': 10}
    return sizeMap[this.pizza['size']] + (this.pizza['toppings'].length * .25);
  }
  gotoPayment(){
    this.gotoPaymentEvent.emit(false);
  }
  ngOnInit() {
    this.addingPizza = this.selections.length  <= 0;
  }
}
