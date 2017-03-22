import { NgModule } from '@angular/core';
import { routing } from './register.router';

import { RegisterComponent } from './register.component';
import { MainModule } from './main/main.module';

@NgModule({
	imports: [
		routing,
		MainModule
	],
	declarations: [
		RegisterComponent
	]
})
export class PagesRegisterModule {
}
