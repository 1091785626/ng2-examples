import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalsManager } from './modal-manager';
import { ModalOptions } from './modal-options';

@NgModule({
	imports: [CommonModule],
	declarations: [ModalComponent],
	exports: [ModalComponent],
	entryComponents: [ModalComponent]
})
export class ModalModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: ModalModule,
			providers: [ModalsManager, ModalOptions],
		};
	}
};
