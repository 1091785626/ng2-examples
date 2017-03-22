import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
	selector: '[validEqual]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: EqualValidatorDirective,
			multi: true
		}
	]
})
export class EqualValidatorDirective implements Validator {
	@Input() validEqual: string;
	@Input() validEqualReverse: boolean;
	constructor() { }

	validate(control: AbstractControl): { [key: string]: any } {
		// 当前控件的值
		const selfValue = control.value;
		// 需要比较的控件，根据属性名称获取
		const targetControl = control.root.get(this.validEqual);
		// console.log(this.validEqual, targetControl);
		// 值不相等
		if (targetControl && selfValue !== targetControl.value ) {
			if (!this.validEqualReverse) {// rePassword
				return {
					validEqual: '两次输入不相等'
				};
			}else { // password
				targetControl.setErrors({
					validEqual: '两次输入不相等'
				});
			}
		}else {
			if (targetControl && this.validEqualReverse) {// password
				// 值相等，清空错误信息
				targetControl.setErrors(null);
			}
		}
		return null;
	}
};
