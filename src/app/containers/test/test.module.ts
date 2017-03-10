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
// persons
import { PersonsComponent } from './persons/persons.component';
import { PersonsInputComponent } from './persons/components/input/input.component';
import { PersonsListComponent } from './persons/components/list/list.component';
import { PersonsFilterComponent } from './persons/components/filter/filter.component';
import { PersonsStatsComponent } from './persons/components/stats/stats.component';

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
		PersonsComponent,
		PersonsInputComponent,
		PersonsListComponent,
		PersonsFilterComponent,
		PersonsStatsComponent
	],
	// exports: [PagesTestComponent]
	// providers: [],
	// bootstrap: []
})
export class PagesTestModule {
}
