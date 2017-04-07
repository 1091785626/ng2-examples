import { Component } from '@angular/core';
import { User } from '@models/login/main';
@Component({
	selector: 'app-main-content',
	templateUrl: './content.html',
	styleUrls: ['./content.scss'],
})
export class MainContentComponent {
	user: User = new User();
	constructor() {
	}

	handleSubmit(value: Object, form: any): void {
		if (form.valid) {
			console.log('form value', value);
		} else {
			console.log(form.errors);
		}
	}
	handleForget(): void {
		console.log('未处理');
	}
}
