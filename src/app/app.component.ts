import { Component } from '@angular/core';

import '../style/app.scss';
import * as $ from 'jquery';
import * as moment from 'moment-timezone';
import {find} from 'lodash';
import {ApiService} from './modules/core/api.service';

@Component({
  selector: 'app', // <app></app>
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'url';

  constructor(private api: ApiService) {
    console.log($);
    console.log(moment);
    console.log(find);
    console.log(this.api);
    // Do something with api
  }
}
