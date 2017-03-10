import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';

import * as types from '../../../constants/actions/test';
import * as actions from '../../../actions/test';
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
		const payload =  {
			id: Math.floor(Math.random() * (5000)),
			name
		};
		this.store.dispatch(actions.addPerson(payload));
	}
	addGuest(id) {
		this.store.dispatch(actions.addGuest(id));
	}
	removeGuest(id) {
		this.store.dispatch(actions.removeGuest(id));
	}
	removePerson(id) {
		this.store.dispatch(actions.removePerson(id));
	}
	toggleAttending(id) {
		this.store.dispatch(actions.toggleAttending(id));
	}
	updateFilter(filter) {
		this.store.dispatch(actions.updateFilter(filter));
	}
	resetParty() {
		this.store.dispatch(actions.resetParty());
	}
}
