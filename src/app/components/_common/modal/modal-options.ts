import {Injectable} from '@angular/core';
/**
 * 设置默认的值
 */
@Injectable()
export class ModalOptions {
	animate = 'fade';

	// override-able properties
	enableHTML = false;
	messageClass = '';
	titleClass = '';
	showCloseButton = false;

	constructor() {}

}
