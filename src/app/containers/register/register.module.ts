import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 双向绑定
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { routing } from './register.router';
import { RegisterComponent } from './register.component';
import { EqualValidatorDirective } from './equal-validator.directive';

@NgModule({
	imports: [
		CommonModule,
		routing,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		RegisterComponent,
		EqualValidatorDirective
	]
})
export class PagesRegisterModule {
}
