import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }
  onLogin(){
    this.authService.logIn();
    console.log(this.authService.isLoggedin);
    this.router.navigate(['/comp2']);

  }
  onLogout(){
    this.authService.logOut();
    console.log(this.authService.isLoggedin);
  }

}
