import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-pages-test-main',
	templateUrl: './main.html',
})
export class MainComponent {
	test$: Observable<any>;
	constructor(private store: Store<any>) {
		this.test$ = store.select('testMain');
	}
}
