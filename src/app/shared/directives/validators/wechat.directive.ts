import { Directive , Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { validRegexs, createValidator} from './validators';

@Directive({
	selector: '[validWechat]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: WechatValidatorDirective,
			multi: true
		}
	]
})
export class WechatValidatorDirective implements Validator {
	private type = 'validWechat';
	@Input()validWechat: string;
	constructor() { }

	validate(control: AbstractControl): { [key: string]: any } {
		// 如果必填，请填写信息
		const tip = this.validWechat;
		// 当前控件的值
		const selfValue = control.value;

		return createValidator(this.type, selfValue, tip);
	}
};

