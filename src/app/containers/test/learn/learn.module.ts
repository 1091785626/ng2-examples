import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnComponent } from './learn.component';
import { LearnContentComponent } from '@components/test/learn/content/content.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		LearnComponent,
		LearnContentComponent
	]
})
export class LearnModule {
}
