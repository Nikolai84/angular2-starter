
import {Component, OnInit } from '@angular/core';

@Component({
  template: `
  <h1>header footer components... shared components</h1> 
  <a routerLink="/">Home</a>
  <a routerLink="/user/management">User Management</a>
  <router-outlet></router-outlet>
  `
})
export class UserRootPageComponent implements OnInit {

  ngOnInit() {
  }

}
