import {Component} from '@angular/core';
import { fn } from './rxjs/root';

@Component({
	selector: 'app-view-test-learn',
	templateUrl: './learn.html',
})
export class LearnComponent {
	constructor() {
		// fn.withLatestFrom();
		// fn.combineLatest();
	}
}
