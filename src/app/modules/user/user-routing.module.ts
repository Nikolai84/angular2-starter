import {Routes, RouterModule} from '@angular/router';
import {UserRootPageComponent} from './user-root.page.component';
import {UserManagementPageComponent} from './management/user-management.page.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'user',
    component: UserRootPageComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          {
            path: 'management',
            component: UserManagementPageComponent,
            // resolve: {
            //   workers: CompanyWorkersResolve
            // }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
