import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 双向绑定
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EqualValidatorDirective } from '../../../components/test/form/res/equal-validator.directive';
import { FormComponent } from './form.component';
import { FormTplComponent } from '../../../components/test/form/tpl/tpl.component';
import { FormResComponent } from '../../../components/test/form/res/res.component';
import { FormActiveComponent } from '../../../components/test/form/active/active.component';
import { FormControlComponent } from '../../../components/test/form/active/form-control/form-control.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		// formBuilder
		ReactiveFormsModule
	],
	declarations: [
		EqualValidatorDirective,
		FormComponent,
		FormTplComponent,
		FormResComponent,
		FormActiveComponent,
		FormControlComponent
	]
})
export class FormModule {
}
