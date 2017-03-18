import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FieldBase, Textbox, TextArea, Image } from './form-control/field/root';
@Component({
	selector: 'app-form-active',
	templateUrl: './active.html',
})
export class FormActiveComponent implements OnInit {
	@Input() fields: FieldBase<any>[] = [
		new Image({
			src: 'http://wx.qlogo.cn/mmopen/1MLz0YkS76H38jmh2IyPHHcgPccbkGrej7iaQ2YbDr1faauBg49H2hBRJPHGdAGkFX5V21xliaMZactkyWVqNl2g/96'
		}),
		new Textbox({
			label: '头像:',
			placeholder: '上传头像',
			type: 'file'
		}),
		new Textbox({
			label: '用户名:',
			placeholder: '用户名'
		}),
		new Textbox({
			label: '常用邮箱:',
			placeholder: '常用邮箱'
		}),
		new Textbox({
			label: '密码:',
			type: 'password',
			placeholder: '密码，至少8位'
		}),
		new Textbox({
			label: '重复密码:',
			type: 'password',
			placeholder: '重复密码'
		}),
		new TextArea({
			label: '个人简介:',
			placeholder: '个人简介，最多140字，不能放链接。',
			rows: 3,
		})
	];
	form: FormGroup;
	constructor() {
	}
	ngOnInit() {
		this.form = this.toFormGroup(this.fields);
	}
	toFormGroup(fields: FieldBase<any>[]) {
		const group: any = {};

		fields.forEach(field => {
			group[field.key] = new FormControl(field.value || '');
		});
		return new FormGroup(group);
	}
}
