import { Directive , Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
// 最小不超过 xxx
@Directive({
	selector: '[validMin]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: MinValidatorDirective,
			multi: true
		}
	]
})
export class MinValidatorDirective implements Validator {
	private type = 'validMin';
	@Input()validMin: string;
	constructor() { }

	validate(control: AbstractControl): { [key: string]: any } {
		// 如果必填，请填写信息
		const tip = this.validMin;
		// 当前控件的值
		const selfValue = control.value;

		if (!selfValue || (selfValue < tip.match(/\d+/g)[0]) ) {
			return {
				validMin: tip
			};
		}
		return null;
	}
};

