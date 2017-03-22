import { Component } from '@angular/core';

@Component({
	selector: 'app-pages-test',
	template: `
		<app-pages-test-nav></app-pages-test-nav>
		<router-outlet></router-outlet>
	`,
})
export class TestComponent {
	constructor() {
	}
}
