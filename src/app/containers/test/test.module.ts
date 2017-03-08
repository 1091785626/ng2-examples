import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 双向绑定
import { FormsModule } from '@angular/forms';
// reudx
import { appStoring } from '../../stores/stores.config';

import { routing } from './test.router';
import { PagesTestComponent } from './test.component';
// main
import { MainComponent } from './main/main.component';
import { MainTextComponent } from './main/components/text/text.component';
// seconed
import { SecondComponent } from './second/second.component';
// learn
import { LearnComponent } from './learn/learn.component';
// person
import { PersonComponent } from './person/person.component';
import { PersonInputComponent } from './person/components/input/input.component';
import { PersonListComponent } from './person/components/list/list.component';
import { PersonFilterComponent } from './person/components/filter/filter.component';
import { PersonStatsComponent } from './person/components/stats/stats.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		routing
	],
	declarations: [
		PagesTestComponent,
		MainComponent,
		MainTextComponent,
		SecondComponent,
		LearnComponent,
		PersonComponent,
		PersonInputComponent,
		PersonListComponent,
		PersonFilterComponent,
		PersonStatsComponent
	],
	// exports: [PagesTestComponent]
	// providers: [],
	// bootstrap: []
})
export class PagesTestModule {
}
