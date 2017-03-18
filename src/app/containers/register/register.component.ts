import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
	selector: 'app-pages-register',
	templateUrl: './register.html',
	styleUrls: ['./register.scss'],
})
export class RegisterComponent {
	public registerForm: FormGroup;
	public name: AbstractControl;
	public email: AbstractControl;
	public password: AbstractControl;
	public repeatPassword: AbstractControl;
	public passwords: FormGroup;
	formErrors = {
		'name': '',
		'email': '',
		'password': '',
		'repeatPassword': ''
	};
	validationMessages = {
		'name': {
			'required': '用户名必须输入。',
			'minlength': '用户名4到32个字符。'
		},
		'email': {
			'required': '邮箱必须输入。',
			'pattern': '请输入正确的邮箱地址。'
		},
		'password': {
			'required': '密码必须输入。',
			'minlength': '密码至少要8位。'
		},
		'repeatPassword': {
			'required': '重复密码必须输入。',
			'minlength': '密码至少要8位。',
			'validateEqual': '两次输入的密码不一致。'
		}
	};
	constructor(fb: FormBuilder) {
		this.registerForm = fb.group({
			'name': [
				'',
				[
					Validators.required,
					Validators.minLength(4)
				]
			],
			'email': [
				'',
				[
					Validators.required,
					Validators.pattern('^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$')
				]
			],
			'password': [
				'',
				[
					Validators.required,
					Validators.minLength(8),
				]
			],
			'repeatPassword': [
				'',
				[
					Validators.required,
					Validators.minLength(8)
				]
			],
		});

		this.name = this.registerForm.controls['name'];
		this.email = this.registerForm.controls['email'];
		this.password = this.registerForm.controls['password'];
		this.repeatPassword = this.registerForm.controls['repeatPassword'];
		this.registerForm.valueChanges
			.subscribe(data => this.onValueChanged(data));
	}
	onValueChanged(data?: any) {
		if (!this.registerForm) { return; }
		const form = this.registerForm;
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
		console.log(values);
	}
}
