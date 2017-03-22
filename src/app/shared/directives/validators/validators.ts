import { Directive , Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

export const validRegexs = {
	validNum: {
		regex: /^\d+(\.\d+)?$/,
		error: '请输入正确数字'
	},
	validId: {
		regex: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/,
		error: '身份证格式不正确'
	},
	validMobile: {
		regex: /^(13[0-9]|14[5|7]|15[^4]|17[0|3|6|7|8]|18[0-9])\d{8}$/,
		error: '请填写正确的手机号码'
	},
	validSms: {
		regex: /^\d{4}$/,
		error: '请输入4位短信验证码'
	},
	validZipCode: {
		regex: /^\d{6}$/,
		error: '请输入6位邮政编码'
	},
	validWeChat: {
		regex: /^[a-zA-Z\d_]{5,}$/,
		error: '请输入正确的微信号'
	},
	validEmail: {
		regex: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
		error: '请输入正确的邮箱地址'
	}
};

export const createValidator = (type: string, value: string, tip: string) => {
	if (!value && tip) {// 必填
		return {
			[type]: `${tip}必填`
		};
	}else if (value && !validRegexs[type].regex.test(value)) {// 有值，需要验证
		return {
			[type]: validRegexs[type].error
		};
	}
	return null;
};










// 已经作废，因为要引用required，value一起验证
// const validSelectors = (type: string) => {
// 	const pattern = validRegexs[type].regex;
// 	return (value?: any) => {
// 		return (new RegExp(pattern)).test(value);
// 	};
// };
// const createValidator = (type: string) => {
// 	const validator = validSelectors(type);
// 	return function customValidator(c: any): {[key: string]: boolean} {
// 		if (c.value !== undefined && c.value !== null && validator(c.value)) {
// 			return null;
// 		}
// 		return {[type]: validRegexs[type].error};
// 	};
// };

// @Directive({
// 	selector: '[validMobile]',
// 	providers: [
// 		{
// 			provide: NG_VALIDATORS,
// 			useValue: createValidator('validMobile'),
// 			multi: true
// 		}
// 	]
// })
// export class MobileValidatorDirective {}




