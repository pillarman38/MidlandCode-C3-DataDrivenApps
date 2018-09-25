import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  submitContactForm(message: Object){
    console.log("Sent: "+JSON.stringify(message));
  }

  constructor() { }
}
