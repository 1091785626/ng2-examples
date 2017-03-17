import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ui
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { UIComponent } from './ui.component';

@NgModule({
	imports: [
		CommonModule,
		Ng2BootstrapModule.forRoot()
	],
	declarations: [
		UIComponent
	]
})
export class UIModule {
}
