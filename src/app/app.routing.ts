import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './root_components/home/home.component';
import { AboutComponent } from './root_components/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
