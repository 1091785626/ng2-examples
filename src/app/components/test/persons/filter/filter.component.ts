import { Component , Output , EventEmitter } from '@angular/core';
import * as types from '../../../../constants/actions/test';

@Component({
	selector: 'app-persons-filter',
	templateUrl: './filter.html',
})
export class PersonsFilterComponent {
	public filters = [
		{
			friendly: 'All',
			action: types.TEST_PERSONS_SHOW_ALL
		},
		{
			friendly: 'Attending',
			action: types.TEST_PERSONS_SHOW_ATTENDING
		},
		{
			friendly: 'Attending w/ Guests',
			action: types.TEST_PERSONS_SHOW_WITH_GUESTS
		}
	];
	@Output() updateFilter: EventEmitter<string> = new EventEmitter<string>();
}
