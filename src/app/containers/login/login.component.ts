import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
	selector: 'app-pages-login',
	templateUrl: './login.html',
	styleUrls: ['./login.scss'],
})
export class LoginComponent {
	public userForm: FormGroup;
	public user: AbstractControl;
	public password: AbstractControl;
	formErrors = {
		'user': '',
		'password': ''
	};
	validationMessages = {
		'user': {
			'required': '用户名必须输入。',
			'minlength': '用户名4到32个字符。'
		},
		'password': {
			'required': '密码必须输入。',
			'minlength': '密码至少要8位。'
		}
	};
	constructor(fb: FormBuilder) {
		this.userForm = fb.group({
			'user': [
				'',
				[
					Validators.required,
					Validators.minLength(4),
					Validators.maxLength(32)
				]
			],
			'password': [
				'',
				[
					Validators.required,
					Validators.minLength(8)
				]
			]
		});
		this.userForm.valueChanges
			.subscribe(data => this.onValueChanged(data));
		this.user = this.userForm.controls['user'];
		this.password = this.userForm.controls['password'];
	}
	onValueChanged(data?: any) {
		if (!this.userForm) { return; }
		const form = this.userForm;
		for (const field in this.formErrors) {
			this.formErrors[field] = '';
			const control = form.get(field);
			if (control && control.dirty && !control.valid) {
				const messages = this.validationMessages[field];
				for (const key in control.errors) {
					this.formErrors[field] += messages[key] + ' ';
				}
			}
		}
	}
	onSubmit(values: Object): void {
		// your code goes here
		console.log(values);
	}
}
