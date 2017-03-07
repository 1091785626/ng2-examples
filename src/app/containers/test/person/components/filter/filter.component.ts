import { Component , Output , EventEmitter } from '@angular/core';
import * as types from '../../../../../constants/actions/test';

@Component({
	selector: 'app-person-filter',
	templateUrl: './filter.html',
})
export class PersonFilterComponent {
	public filters = [
		{
			friendly: 'All',
			action: types.TEST_PERSON_SHOW_ALL
		},
		{
			friendly: 'Attending',
			action: types.TEST_PERSON_SHOW_ATTENDING
		},
		{
			friendly: 'Attending w/ Guests',
			action: types.TEST_PERSON_SHOW_WITH_GUESTS
		}
	];
	@Output() updateFilter: EventEmitter<string> = new EventEmitter<string>();
}
