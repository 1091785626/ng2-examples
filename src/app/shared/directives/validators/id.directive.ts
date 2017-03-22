import { Directive , Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { validRegexs, createValidator} from './validators';

@Directive({
	selector: '[validId]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: IdValidatorDirective,
			multi: true
		}
	]
})
export class IdValidatorDirective implements Validator {
	private type = 'validId';
	@Input()validId: string;
	constructor() { }

	validate(control: AbstractControl): { [key: string]: any } {
		// 如果必填，请填写信息
		const tip = this.validId;
		// 当前控件的值
		const selfValue = control.value;

		return createValidator(this.type, selfValue, tip);
	}
};

