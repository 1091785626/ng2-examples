import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';

import * as types from '../../../constants/actions/test';
import * as actions from '../../../actions/test';
import { dataSelector , percentAttendingSelector } from '../../../selectors/test/persons';
import bindActionCreators from '../../../utils/lib/bindActionCreators';

@Component({
	selector: 'app-view-test-persons',
	templateUrl: './persons.html',
})
export class PersonsComponent {
	actions: any;
	data$: Observable<any>;
	percentAttendance$: Observable<any>;
	constructor(private store: Store<any>) {
		this.data$ = store.select(dataSelector);
		this.percentAttendance$ = store.select(percentAttendingSelector);

		this.actions = bindActionCreators.call(this.store, actions);
	}
	addPerson(name) {
		const payload =  {
			id: Math.floor(Math.random() * (5000)),
			name
		};
		this.actions.addPerson(payload);
	}
	addGuest(id) {
		this.actions.addGuest(id);
	}
	removeGuest(id) {
		this.actions.removeGuest(id);
	}
	removePerson(id) {
		this.actions.removePerson(id);
	}
	toggleAttending(id) {
		this.actions.toggleAttending(id);
	}
	updateFilter(filter) {
		this.actions.updateFilter(filter);
	}
	resetParty() {
		this.store.dispatch(actions.resetParty());
	}
}
