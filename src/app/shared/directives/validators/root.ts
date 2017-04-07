import { EqualValidatorDirective } from './equal.directive';
import { MobileValidatorDirective } from './mobile.directive';
import { IdValidatorDirective } from './id.directive';
import { SmsValidatorDirective } from './sms.directive';
import { WechatValidatorDirective } from './wechat.directive';
import { NumValidatorDirective } from './num.directive';
import { ZipCodeValidatorDirective } from './zip-code.directive';
import { RequiredValidatorDirective } from './required.directive';
import { EmailValidatorDirective } from './email.directive';
import { MinLengthValidatorDirective } from './min-length.directive';
import { MaxValidatorDirective } from './max.directive';
import { MinValidatorDirective } from './min.directive';

export const Validators = [
	EqualValidatorDirective,
	MobileValidatorDirective,
	IdValidatorDirective,
	SmsValidatorDirective,
	WechatValidatorDirective,
	NumValidatorDirective,
	ZipCodeValidatorDirective,
	RequiredValidatorDirective,
	EmailValidatorDirective,
	MinLengthValidatorDirective,
	MaxValidatorDirective,
	MinValidatorDirective
];
