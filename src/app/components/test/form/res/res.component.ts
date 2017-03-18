import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

class User {
    id: number;
    userName: string;
    nickName: string;
    password: string;
    remeberMe: boolean;
    email: string;
    confirmPassword: string;
    vcode: string;
}
@Component({
	selector: 'app-form-res',
	templateUrl: './res.html',
})
export class FormResComponent implements OnInit {
	userForm: FormGroup;
	userInfo = new User;

	formErrors = {
		'userName': '',
		'nickName': '',
		'email': '',
		'password': '',
		'confirmPassword': '',
		'formError': '',
		'vcode': ''
	};
	validationMessages = {
		'userName': {
			'required': '用户名必须输入。',
			'minlength': '用户名4到32个字符。'
		},
		'nickName': {
			'required': '昵称必须输入。',
			'minlength': '昵称2到32个字符。'
		},
		'email': {
			'required': '邮箱必须输入。',
			'pattern': '请输入正确的邮箱地址。'
		},
		'password': {
			'required': '密码必须输入。',
			'minlength': '密码至少要8位。'
		},
		'confirmPassword': {
			'required': '重复密码必须输入。',
			'minlength': '密码至少要8位。',
			'validateEqual': '两次输入的密码不一致。'
		},
		'vcode': {
			'required': '验证码必须输入。',
			'minlength': '4位验证码',
			'maxlength': '4位验证码'
		},
	};
	constructor(
		public fb: FormBuilder,
	) {
	}
	ngOnInit() {
		this.buildForm();
	}
	buildForm() {
		this.userForm = this.fb.group({
			'userName': [
				this.userInfo.userName,
				[
					Validators.required,
					Validators.minLength(4),
					Validators.maxLength(32)
				]
			],
			'nickName': [
				this.userInfo.nickName,
				[
					Validators.required,
					Validators.minLength(2),
					Validators.maxLength(32)
				]
			],
			'email': [
				this.userInfo.email,
				[
					Validators.required,
					Validators.pattern('^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$')
				]
			],
			'password': [
				this.userInfo.password,
				[
					Validators.required,
					Validators.minLength(8),
				]
			],
			'confirmPassword': [
				this.userInfo.confirmPassword,
				[
					Validators.required,
					Validators.minLength(8)
				]
			],
			'vcode': [
				this.userInfo.vcode,
				[
					Validators.required,
					Validators.minLength(4),
					Validators.maxLength(4)
				]
			]
		});
		this.userForm.valueChanges
			.subscribe(data => this.onValueChanged(data));
		this.onValueChanged();
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
	handleRegister() {
		if (this.userForm.valid) {
			this.userInfo = this.userForm.value;
		}else {
			 this.formErrors.formError = '存在不合法的输入项，请检查。';
		}
	}
	handleSms() {
		console.log(this.userForm);
	}
}
