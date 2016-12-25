import {NgModule}       from '@angular/core';
import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {UserRootPageComponent} from './user-root.page.component';
import {UserManagementPageComponent} from './management/user-management.page.component';
import {SharedModule} from '../shared';

@NgModule({
  imports: [
   SharedModule,
   UserRoutingModule
  ],
  declarations: [
    UserRootPageComponent,
    UserManagementPageComponent,
    UserComponent
  ]
})
export class UserModule {

}

