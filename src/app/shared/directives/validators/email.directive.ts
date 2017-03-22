import { Directive , Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { validRegexs, createValidator} from './validators';

@Directive({
	selector: '[validEmail]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: EmailValidatorDirective,
			multi: true
		}
	]
})
export class EmailValidatorDirective implements Validator {
	private type = 'validEmail';
	@Input()validEmail: string;
	constructor() { }

	validate(control: AbstractControl): { [key: string]: any } {
		// 如果必填，请填写信息
		const tip = this.validEmail;
		// 当前控件的值
		const selfValue = control.value;

		return createValidator(this.type, selfValue, tip);
	}
};

