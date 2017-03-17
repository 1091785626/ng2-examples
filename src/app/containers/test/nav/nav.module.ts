import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../../../components/test/nav/nav.component';

@NgModule({
	imports: [
		RouterModule
	],
	declarations: [
		NavComponent
	],
	// 这里不写就无法共享；
	exports: [
		NavComponent
	]
})
export class NavModule {
}

