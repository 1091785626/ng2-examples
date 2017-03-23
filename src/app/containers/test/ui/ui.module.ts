import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ui
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { UIComponent } from './ui.component';
import { UIContentComponent } from '../../../components/test/ui/content/content.component';
import { UIToastComponent } from '../../../components/test/ui/toast/toast.component';
import { UIModalComponent } from '../../../components/test/ui/modal/modal.component';
import { ToastModule } from '../../../components/_common/toast/toast.module';
import { ModalModule } from '../../../components/_common/modal/modal.module';

@NgModule({
	imports: [
		CommonModule,
		Ng2BootstrapModule.forRoot(),
		ToastModule.forRoot(),
		ModalModule.forRoot()
	],
	declarations: [
		UIComponent,
		UIContentComponent,
		UIToastComponent,
		UIModalComponent
	]
})
export class UIModule {
}
