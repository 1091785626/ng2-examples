import { NgModule } from '@angular/core';

import { routing } from './test.router';
import { TestComponent } from './test.component';
// main
import { MainModule } from './main/main.module';
// seconed
import { SecondModule } from './second/second.module';
// learn
import { LearnModule } from './learn/learn.module';
// persons
import { PersonsModule } from './persons/persons.module';
// UI
import { UIModule } from './ui/ui.module';
// nav
import { NavModule } from './nav/nav.module';
@NgModule({
	imports: [
		routing,
		MainModule,
		SecondModule,
		PersonsModule,
		LearnModule,
		UIModule,
		NavModule
	],
	declarations: [
		TestComponent
	],
	// exports: [PagesTestComponent]
	// providers: [],
	// bootstrap: []
})
export class PagesTestModule {
}
