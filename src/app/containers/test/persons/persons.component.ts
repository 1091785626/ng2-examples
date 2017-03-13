import {Component, OnInit, OnDestroy} from '@angular/core';
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
export class PersonsComponent implements OnInit, OnDestroy {
	async: any;
	actions: any;
	data$: Observable<any>;
	data$$: Observable<any>;
	percentAttendance$: Observable<any>;
	constructor(private store: Store<any>) {
		// 这里不常这么写，模版中有四处data$ | async, 意味着有四个subscribes
		this.data$ = store.select(dataSelector);
		this.percentAttendance$ = store.select(percentAttendingSelector);
		this.actions = bindActionCreators.call(this.store, actions);
		this.async = Observable.combineLatest(
			store.select(dataSelector),
			(data) => {
				if (data.persons.length === 0) {
					const url = types.TEST_PERSONS_ADD_PERSON_GET;
					const param = {
						id: Math.floor(Math.random() * (5000)),
						name: '首次加载的数据'
					};
					const params = {
						param,
						ajaxType: 'get',  // 先用get做测试，实际是post
						onSuccess: (res) => {

						},
						onError: (res) => {

						}
					};
					this.actions.request(url, params, {});
				}
			}
		).subscribe();
	}
	ngOnInit() {
		// 订阅一次后取消订阅
		this.async.unsubscribe();
	}
	ngOnDestroy() {
	}
	addPerson(name) {
		const payload =  {
			id: Math.floor(Math.random() * (5000)),
			name
		};
		this.actions.addPerson(payload);
	}
	addPersonAsync(name) {
		const url = types.TEST_PERSONS_ADD_PERSON_POST;
		const param = {
			id: Math.floor(Math.random() * (5000)),
			name
		};
		const params = {
			param,
			ajaxType: 'get',  // 先用get做测试，实际是post
			onSuccess: (res) => {

			},
			onError: (res) => {

			}
		};
		this.actions.request(url, params, {});
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
