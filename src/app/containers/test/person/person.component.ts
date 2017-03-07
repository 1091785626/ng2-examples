import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../../reducers/rootReducer';
import * as fromTestPerson from '../../../reducers/test-person';
import * as types from '../../../constants/actions/test';

@Component({
	selector: 'app-view-test-person',
	templateUrl: './person.html',
})
export class PersonComponent {
	people$: Observable<any>;
	constructor(private store: Store<fromRoot.State>) {
		this.people$ = store.select('testPerson');
	}
	addPerson(name) {
		this.store.dispatch(
			{
				type: types.TEST_PEASON_ADD_PERSON,
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
				type: types.TEST_PEASON_ADD_GUEST,
				payload: id
			}
		);
	}
	removeGuest(id) {
		this.store.dispatch(
			{
				type: types.TEST_PEASON_REMOVE_GUEST,
				payload: id
			}
		);
	}
	removePerson(id) {
		this.store.dispatch(
			{
				type: types.TEST_PEASON_REMOVE_PERSON,
				payload: id
			}
		);
	}
	toggleAttending(id) {
		this.store.dispatch(
			{
				type: types.TEST_PEASON_TOGGLE_ATTENDING,
				payload: id
			}
		);
	}
}
