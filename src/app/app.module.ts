import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
@NgModule({
	imports: [
		HttpModule,
		BrowserModule,
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
	providers: [RequestService],
	bootstrap: [AppComponent]
})
export class AppModule {

}
