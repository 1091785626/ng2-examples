import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 双向绑定
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { routing } from './login.router';
import { LoginComponent } from './login.component';

@NgModule({
	imports: [
		CommonModule,
		routing,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		LoginComponent
	]
})
export class PagesLoginModule {
}
