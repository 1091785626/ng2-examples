import { Component , Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-main-text',
	templateUrl: './text.html',
})
export class MainTextComponent {
	@Input() test;
	constructor(private store: Store<any>) {
		setTimeout(() => {
			store.dispatch({
				type: 'TEST_MAIN_INCREMENT'
			});
		}, 2000);
	}
}
