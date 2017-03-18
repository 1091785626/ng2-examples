import {Component} from '@angular/core';

@Component({
	selector: 'app-form-tpl',
	templateUrl: './tpl.html',
})
export class FormTplComponent {
	user = {};
	error: Error;
	constructor() {
	}
	handleLogin() {
		console.log(this.user);
	}
	handleForget() {
		console.log(this.user);
	}
}
