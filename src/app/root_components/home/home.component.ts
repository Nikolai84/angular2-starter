import { Component, OnInit } from '@angular/core';
// @TODO should be named home.page.component

@Component({
  selector: 'hsp-home',
  templateUrl: 'home.component.pug',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
