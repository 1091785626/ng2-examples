import { Directive , Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { validRegexs, createValidator} from './validators';

@Directive({
	selector: '[validRequired]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: RequiredValidatorDirective,
			multi: true
		}
	]
})
export class RequiredValidatorDirective implements Validator {
	private type = 'validRequired';
	@Input()validRequired: string;
	constructor() { }

	validate(control: AbstractControl): { [key: string]: any } {
		// 如果必填，请填写信息
		const tip = this.validRequired;
		// 当前控件的值
		const selfValue = control.value;
		// 空值
		if (!selfValue) {
			return {
				validRequired: `${tip}必填`
			};
		}
		return null;
	}
};

