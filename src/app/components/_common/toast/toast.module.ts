import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ToastsManager } from './toast-manager';
import { ToastOptions } from './toast-options';

@NgModule({
	imports: [CommonModule],
	declarations: [ToastComponent],
	exports: [ToastComponent],
	entryComponents: [ToastComponent]
})
export class ToastModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: ToastModule,
			providers: [ToastsManager, ToastOptions],
		};
	}
};
