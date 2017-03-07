import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';

import * as fromTestPerson from '../../../reducers/test-person';
import * as types from '../../../constants/actions/test';

@Component({
	selector: 'app-view-test-person',
	templateUrl: './person.html',
})
export class PersonComponent {
	people$: Observable<any>;
	filter$: Observable<any>;
	attending$: Observable<any>;
	guests$: Observable<any>;
	constructor(private store: Store<any>) {
		this.people$ = store.select('testPerson');
		this.filter$ = store.select('testFilter');
		this.attending$ = this.people$
				.map(people => people.filter(person => person.attending));
      	this.guests$ = this.people$
		        .map(people => people.map(person => person.guests)
                .reduce((acc, curr) => acc + curr, 0));
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
}
