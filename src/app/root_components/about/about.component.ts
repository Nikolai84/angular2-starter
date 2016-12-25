import { Component, OnInit } from '@angular/core';
// @TODO should be named app.page.component
@Component({
  selector: 'hsp-about',
  templateUrl: 'about.component.pug',
  styleUrls: ['about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }

}
