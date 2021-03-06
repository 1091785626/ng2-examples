import { Component } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Register } from '@models/register/main';

@Component({
	selector: 'app-main-content',
	templateUrl: './content.html',
	styleUrls: ['./content.scss'],
})
export class MainContentComponent {
	register: Register = new Register();
	constructor() {
	}
	handleSubmit(value: Object, form: any): void {
		if (form.valid) {
			console.log('form value', value);
		} else {
			console.log(form.errors);
		}
	}
}
