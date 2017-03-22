import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ui
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { UIComponent } from './ui.component';
import { UIContentComponent } from '../../../components/test/ui/content/content.component';

@NgModule({
	imports: [
		CommonModule,
		Ng2BootstrapModule.forRoot()
	],
	declarations: [
		UIComponent,
		UIContentComponent
	]
})
export class UIModule {
}
