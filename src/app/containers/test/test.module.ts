import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routing } from './test.router';
import { TestComponent } from './test.component';
// main
import { MainModule } from './main/main.module';
// learn
import { LearnModule } from './learn/learn.module';
// persons
import { PersonsModule } from './persons/persons.module';
// UI
import { UIModule } from './ui/ui.module';
// nav
import { NavModule } from './nav/nav.module';
// form
import { FormModule } from './form/form.module';
@NgModule({
	imports: [
		routing,
		RouterModule,
		MainModule,
		PersonsModule,
		LearnModule,
		UIModule,
		NavModule,
		FormModule
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
