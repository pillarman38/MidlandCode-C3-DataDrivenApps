import { Directive, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '.birthday'
})

export class MissedBirthdayDirective implements OnInit{
  @Input('birthday') birthday: string;
  myBirthday: Date = new Date('1980-01-01')
  constructor() { }
  @HostBinding('class.missed') private missed: boolean;
  @HostBinding('class.is-older') private isOlder: boolean;

  checkDate(){
    let now = new Date(Date.now());
    let splitDate = this.birthday.split('/')
    let userBday = new Date(`${splitDate[2]}-${splitDate[0]}-${splitDate[1]}`)
    this.isOlder =  userBday < this.myBirthday;
    this.missed = (userBday.getMonth() < now.getMonth() || 
    (now.getMonth() === userBday.getMonth() && userBday.getDate() < now.getDate()))
  }

  ngOnInit(){
    this.checkDate();
  }


}
