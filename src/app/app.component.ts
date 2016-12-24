import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';
import * as $ from 'jquery';
import * as moment from 'moment-timezone';
import {find} from 'lodash';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'url';

  constructor(private api: ApiService) {
    console.log($);
    console.log(moment);
    console.log(find);
    // Do something with api
  }
}
