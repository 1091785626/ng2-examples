import { NgModule } from '@angular/core';

import { FormComponent } from './form.component';
import { FormTplDiyComponent } from '@components/test/form/tpl-diy/tpl-diy.component';
import { FormTplComponent } from '@components/test/form/tpl/tpl.component';
import { FormResComponent } from '@components/test/form/res/res.component';
import { FormActiveComponent } from '@components/test/form/active/active.component';
import { FormControlComponent } from '@components/test/form/active/form-control/form-control.component';
import { SharedModule } from '@shared/shared.module';
@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		FormComponent,
		FormTplComponent,
		FormTplDiyComponent,
		FormResComponent,
		FormActiveComponent,
		FormControlComponent
	]
})
export class FormModule {
}
