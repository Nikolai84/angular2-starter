import {
	ModuleWithProviders, NgModule,
	Optional, SkipSelf }       from '@angular/core';
import { CommonModule }      from '@angular/common';
import { UserService, UserServiceConfig }  from './user.service';
import {ApiService} from './api.service';

@NgModule({
	imports:      [ CommonModule ],
// declarations: [ TitleComponent ],
// exports:      [ TitleComponent ],
	providers:    [ UserService ]
})
export class CoreModule {

	constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only');
		}
	}

	static forRoot(config: UserServiceConfig): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [
				{provide: UserServiceConfig, useValue: config },
				ApiService
			]
		};
	}
}

/* INFO
 gather providers, components that only appears in the root AppComponent and put
 them in a single CoreModule that we import on
 ce when the app starts and never import anywhere else.
 @see https://angular.io/docs/ts/latest/guide/ngmodule.html#!#core-module
*/