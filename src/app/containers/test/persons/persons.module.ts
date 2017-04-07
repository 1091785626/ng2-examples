import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 双向绑定
import { FormsModule } from '@angular/forms';
// persons
import { PersonsComponent } from './persons.component';
import { PersonsContentComponent } from '@components/test/persons/content/content.component';
import { PersonsInputComponent } from '@components/test/persons/input/input.component';
import { PersonsListComponent } from '@components/test/persons/list/list.component';
import { PersonsFilterComponent } from '@components/test/persons/filter/filter.component';
import { PersonsStatsComponent } from '@components/test/persons/stats/stats.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
	],
	declarations: [
		PersonsComponent,
		PersonsContentComponent,
		PersonsInputComponent,
		PersonsListComponent,
		PersonsFilterComponent,
		PersonsStatsComponent
	]
})
export class PersonsModule {
}
