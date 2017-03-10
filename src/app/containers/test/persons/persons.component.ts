import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';

import * as types from '../../../constants/actions/test';
import { dataSelector , percentAttendingSelector } from '../../../selectors/test/persons';

@Component({
	selector: 'app-view-test-persons',
	templateUrl: './persons.html',
})
export class PersonsComponent {
	data$: Observable<any>;
	percentAttendance$: Observable<any>;
	constructor(private store: Store<any>) {
		this.data$ = store.select(dataSelector);
		this.percentAttendance$ = store.select(percentAttendingSelector);
	}
	addPerson(name) {
		this.store.dispatch(
			{
				type: types.TEST_PERSONS_ADD_PERSON,
				payload: {
					id: Math.floor(Math.random() * (5000)),
					name
				}
			}
		);
	}
	addGuest(id) {
		this.store.dispatch(
			{
				type: types.TEST_PERSONS_ADD_GUEST,
				payload: id
			}
		);
	}
	removeGuest(id) {
		this.store.dispatch(
			{
				type: types.TEST_PERSONS_REMOVE_GUEST,
				payload: id
			}
		);
	}
	removePerson(id) {
		this.store.dispatch(
			{
				type: types.TEST_PERSONS_REMOVE_PERSON,
				payload: id
			}
		);
	}
	toggleAttending(id) {
		this.store.dispatch(
			{
				type: types.TEST_PERSONS_TOGGLE_ATTENDING,
				payload: id
			}
		);
	}
	updateFilter(filter) {
		this.store.dispatch({type: filter});
	}
	resetParty() {
		this.store.dispatch({type: types.TEST_PERSONS_RESET_STATE});
	}
}
