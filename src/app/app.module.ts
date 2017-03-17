import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
// reudx
import { appStoring, appRouterStoring } from './stores/stores.config';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// effecting
import { effecting } from './effects/effects';

import { AppComponent } from './app.component';

import { appRouting } from './app.router';
@NgModule({
	declarations: [AppComponent],
	imports: [
		HttpModule,
		BrowserModule,
		appRouting,
		appStoring,
		effecting,
		appRouterStoring,
		StoreDevtoolsModule.instrumentOnlyWithExtension({
			maxAge: 5
		})
	],
	// providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {

}
