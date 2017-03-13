import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
// reudx
import { appStoring } from './stores/stores.config';

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
		effecting
	],
	// providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {

}
