import { Component, AfterViewInit, Input, ViewContainerRef } from '@angular/core';
import { ToastsManager } from '../../../_common/toast/toast-manager';
@Component({
	selector: 'app-ui-toast',
	template: '<button class="btn btn-default" (click)="showSuccess()">toast Tester</button>'
})
export class UIToastComponent implements AfterViewInit {
	constructor(public toast: ToastsManager, vcr: ViewContainerRef) {
		this.toast.setRootViewContainerRef(vcr);
	}
	ngAfterViewInit () {
	}
	showSuccess() {
		this.toast
			.show('success', 'You are awesome!', 'Success!')
			.then(() => {
				console.log('不是弹窗结束执行，立马执行');
			});
	}
}

