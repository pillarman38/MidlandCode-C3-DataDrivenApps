import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string = ''
  password: string = ''
  error: Object = {};
  constructor(private userService: UserService, private router: Router) { }

  signup(){
    this.error = {}
    if(this.username.length > 2 && this.password.length > 2){
      this.userService.signup(this.password, this.username).subscribe( res =>{
        if(res['err']) this.error['err'] = res['err'].error.err
        else{
        this.router.navigate(['/']);
        }
      }
    );
    }
    else{
      this.error['err'] = "Invalid password or username length"
    }
  }
  ngOnInit() {
  }

}
