import { Component } from '@angular/core';

@Component({
	selector: 'app-form-tpl-diy',
	templateUrl: './tpl-diy.html',
})
export class FormTplDiyComponent {
	mobile: number;
	sms: number;
	constructor() {
	}
	handleSubmit(value, form) {
		if (form.valid) {
			console.log('form value', value);
		} else {
			console.log(form.controls['inputSms'].errors);
		}
	}
}
