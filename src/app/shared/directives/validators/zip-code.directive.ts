import { Directive , Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { validRegexs, createValidator} from './validators';

@Directive({
	selector: '[validZipCode]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: ZipCodeValidatorDirective,
			multi: true
		}
	]
})
export class ZipCodeValidatorDirective implements Validator {
	private type = 'validZipCode';
	@Input()validZipCode: string;
	constructor() { }

	validate(control: AbstractControl): { [key: string]: any } {
		// 如果必填，请填写信息
		const tip = this.validZipCode;
		// 当前控件的值
		const selfValue = control.value;

		return createValidator(this.type, selfValue, tip);
	}
};

