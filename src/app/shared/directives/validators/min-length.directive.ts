import { Directive , Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
	selector: '[validMinLength]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: MinLengthValidatorDirective,
			multi: true
		}
	]
})
export class MinLengthValidatorDirective implements Validator {
	private type = 'validMinLength';
	@Input()validMinLength: string;
	constructor() { }

	validate(control: AbstractControl): { [key: string]: any } {
		// 如果必填，请填写信息
		const tip = this.validMinLength;
		// 当前控件的值
		const selfValue = control.value;

		if (!selfValue || (selfValue.length < tip.match(/\d+/g)[0]) ) {
			return {
				validMinLength: tip
			};
		}
		return null;
	}
};

