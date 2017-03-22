import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 双向绑定
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Validators } from './directives/validators/root';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		...Validators
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		...Validators
	]
})
export class SharedModule {
}
