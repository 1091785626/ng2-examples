import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { routing } from './login.router';
import { MainModule } from './main/main.module';

@NgModule({
	imports: [
		routing,
		MainModule
	],
	declarations: [
		LoginComponent
	]
})
export class PagesLoginModule {
}
