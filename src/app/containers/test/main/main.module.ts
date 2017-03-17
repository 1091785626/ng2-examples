import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// main
import { MainTextComponent } from '../../../components/test/main/text/text.component';

import { MainComponent } from './main.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		MainComponent,
		MainTextComponent
	]
})
export class MainModule {
}
