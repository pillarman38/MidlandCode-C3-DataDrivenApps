import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private contactService: ContactService){

   }

  get name(){
    return this.contactForm.get('name');
  }

  get number(){
    return this.contactForm.get('number');
  }

  get reason(){
    return this.contactForm.get('reason');
  }

  get message(){
    return this.contactForm.get('message');
  }

  submitForm(){
    if(this.contactForm.valid){
    let comment = Object.assign({}, this.contactForm.value);
      this.contactService.submitContactForm(comment)
  }
  else{
    Object.keys(this.contactForm.controls).forEach(field => { 
      const control = this.contactForm.get(field);            
      control.markAsTouched({ onlySelf: true });   
    });
  }
   
  }
  
  validateReason(control: AbstractControl){
      let reasons: string[] = ['suggestion', 'complaint', 'comment'];
      let valid = !reasons.includes(control.value)
      return valid ? {'invalidReason': {value: control.value}} : null
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name' : new FormControl('', 
        [Validators.required, 
         Validators.minLength(5)]),
      'number' : new FormControl('', Validators.required),
      'reason' : new FormControl('suggestion',  this.validateReason),
      'message': new FormControl('', Validators.required)
    })
  }

}
