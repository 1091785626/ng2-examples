import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// reudx
import { appStoring } from './stores/stores.config';

import { AppComponent } from './app.component';

import { appRouting } from './app.router';
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		appRouting,
		appStoring
	],
	// providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {

}
