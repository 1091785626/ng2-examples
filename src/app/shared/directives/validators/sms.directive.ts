import { Directive , Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { validRegexs, createValidator} from './validators';

@Directive({
	selector: '[validSms]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: SmsValidatorDirective,
			multi: true
		}
	]
})
export class SmsValidatorDirective implements Validator {
	private type = 'validSms';
	@Input()validSms: string;
	constructor() { }

	validate(control: AbstractControl): { [key: string]: any } {
		// 如果必填，请填写信息
		const tip = this.validSms;
		// 当前控件的值
		const selfValue = control.value;

		return createValidator(this.type, selfValue, tip);
	}
};

