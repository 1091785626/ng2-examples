import { Directive , Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { validRegexs, createValidator} from './validators';

@Directive({
	selector: '[validNum]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: NumValidatorDirective,
			multi: true
		}
	]
})
export class NumValidatorDirective implements Validator {
	private type = 'validNum';
	@Input()validNum: string;
	constructor() { }

	validate(control: AbstractControl): { [key: string]: any } {
		// 如果必填，请填写信息
		const tip = this.validNum;
		// 当前控件的值
		const selfValue = control.value;

		return createValidator(this.type, selfValue, tip);
	}
};

