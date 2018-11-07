import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  error: Object = {};
  password: string = ''
  constructor(private userService: UserService, private router: Router) { }

  login(){
    this.error = {}
    if(this.username.length > 2 && this.password.length > 2){
      this.userService.login(this.password, this.username).subscribe(
        res =>{
          if(res['err']) this.error['err'] = res['err'].error.err
          else{
          this.router.navigate(['/todos']);
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
