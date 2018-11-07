import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Object = {
    name: '',
    number: '',
    reason: 'suggestion',
    message: ''
  }
  constructor(private contactService: ContactService){

   }

  submitForm(){
   this.contactService.submitContactForm(this.contact);
   this.contact = new Object();
   this.contact['reason'] = 'suggestion';
  }
  
  ngOnInit() {
  }

}
