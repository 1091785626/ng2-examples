import { Injectable } from '@angular/core';
/**
 * 设置默认的值
 */
@Injectable()
export class ToastOptions {
	positionClass = 'toast-top-right';
	maxShown = 5;
	newestOnTop = false;
	animate = 'fade';

	// override-able properties
	toastLife = 5000;
	enableHTML = false;
	dismiss = 'auto'; // 'auto' | 'click' | 'controlled'
	messageClass = 'toast-message';
	titleClass = 'toast-title';
	showCloseButton = false;

	constructor() {}

}
// * toast-top-right (Default)
// * toast-top-center
// * toast-top-left
// * toast-top-full-width
// * toast-bottom-right
// * toast-bottom-center
// * toast-bottom-left
// * toast-bottom-full-width
