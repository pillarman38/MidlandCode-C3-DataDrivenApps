import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  reason: string = 'comment';
  constructor() { }

  ngOnInit() {
  }

}
