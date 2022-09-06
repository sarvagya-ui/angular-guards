import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedin : boolean = false;

  logIn(){
    this.isLoggedin = true;
  }

  logOut(){
    this.isLoggedin = false;
  }

  isAuthenticated(){
    return this.isLoggedin;
  }

}
