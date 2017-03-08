import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';

import * as types from '../../../constants/actions/test';
import { partyData , attendees , percentAttending } from '../../../selectors/test/person';

@Component({
	selector: 'app-view-test-person',
	templateUrl: './person.html',
})
export class PersonComponent {
	data$: Observable<any>;
	percentAttendance$: Observable<any>;
	constructor(private store: Store<any>) {
		this.data$ = Observable.combineLatest(
			store.select('testPerson'),
			store.select('testFilter'),
		)
		// extracting party model to selector
		.let(partyData());
		// store.let(attendees());
		this.percentAttendance$ = store.let(percentAttending());
	}
	addPerson(name) {
		this.store.dispatch(
			{
				type: types.TEST_PERSON_ADD_PERSON,
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
				type: types.TEST_PERSON_ADD_GUEST,
				payload: id
			}
		);
	}
	removeGuest(id) {
		this.store.dispatch(
			{
				type: types.TEST_PERSON_REMOVE_GUEST,
				payload: id
			}
		);
	}
	removePerson(id) {
		this.store.dispatch(
			{
				type: types.TEST_PERSON_REMOVE_PERSON,
				payload: id
			}
		);
	}
	toggleAttending(id) {
		this.store.dispatch(
			{
				type: types.TEST_PERSON_TOGGLE_ATTENDING,
				payload: id
			}
		);
	}
	updateFilter(filter) {
		this.store.dispatch({type: filter});
	}
	resetParty() {
		this.store.dispatch({type: types.TEST_PERSON_RESET_STATE});
	}
}
