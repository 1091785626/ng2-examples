import { Component } from '@angular/core';
import { User } from '../../../../models/test/form';
@Component({
	selector: 'app-form-tpl',
	templateUrl: './tpl.html',
})
export class FormTplComponent {
	user: User = new User();
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
