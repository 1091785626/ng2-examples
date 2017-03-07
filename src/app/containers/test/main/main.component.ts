import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../../reducers/rootReducer';
import * as fromTest from '../../../reducers/test';

import 'style-loader!./main.scss';

@Component({
	selector: 'app-view-test-main',
	templateUrl: './main.html',
})
export class MainComponent {
	test$: Observable<fromTest.State>;
	constructor(private store: Store<fromRoot.State>) {
		this.test$ = store.select('test');
		setTimeout(() => {
			store.dispatch({
				type: 'TEST_MAIN_INCREMENT'
			});
		}, 2000);
	}
}
