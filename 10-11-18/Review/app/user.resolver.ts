import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { User } from './stores/user';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {
  user: User
  constructor(private userService : UserService) { }

  resolve(route: ActivatedRouteSnapshot){
    console.log('calling resolver');
    if(this.userService.user && this.userService.user['id'] == route.params.id){
      return of(this.userService.user);
    }
    else{
      return this.userService.getUsers(route.params.id);
    }
  }

}
