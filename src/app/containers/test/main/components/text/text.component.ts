import { Component , Input } from '@angular/core';

@Component({
	selector: 'app-main-text',
	templateUrl: './text.html',
})
export class MainTextComponent {
	@Input() test;
	constructor() {
	}
}
