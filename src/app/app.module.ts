import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';
// reudx
import { appStoring, appRouterStoring } from './stores/stores.config';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// effecting
import { requestEffecting } from './effects/request';

import { AppComponent } from './app.component';

import { appRouting } from './app.router';
import { RequestService } from './services/request.service';
import { LoadingService } from './services/loading.service';
@NgModule({
	imports: [
		HttpModule,
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule,
		appRouting,
		appStoring,
		requestEffecting,
		appRouterStoring,
		StoreDevtoolsModule.instrumentOnlyWithExtension({
			maxAge: 5
		})
	],
	declarations: [AppComponent],
	providers: [RequestService, LoadingService],
	bootstrap: [AppComponent]
})
export class AppModule {

}
