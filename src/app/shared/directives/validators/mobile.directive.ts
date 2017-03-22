import { Directive , Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { validRegexs, createValidator} from './validators';

@Directive({
	selector: '[validMobile]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: MobileValidatorDirective,
			multi: true
		}
	]
})
export class MobileValidatorDirective implements Validator {
	private type = 'validMobile';
	@Input()validMobile: string;
	constructor() { }

	validate(control: AbstractControl): { [key: string]: any } {
		// 如果必填，请填写信息
		const tip = this.validMobile;
		// 当前控件的值
		const selfValue = control.value;

		return createValidator(this.type, selfValue, tip);
	}
};

