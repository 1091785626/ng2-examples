import { Directive , Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
// 最大不超过 xxx
@Directive({
	selector: '[validMax]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: MaxValidatorDirective,
			multi: true
		}
	]
})
export class MaxValidatorDirective implements Validator {
	private type = 'validMax';
	@Input()validMax: string;
	constructor() { }

	validate(control: AbstractControl): { [key: string]: any } {
		// 如果必填，请填写信息
		const tip = this.validMax;
		// 当前控件的值
		const selfValue = control.value;

		if (!selfValue || (selfValue > tip.match(/\d+/g)[0]) ) {
			return {
				validMax: tip
			};
		}
		return null;
	}
};

