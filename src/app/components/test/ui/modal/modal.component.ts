import { Component, AfterViewInit, Input, ViewContainerRef } from '@angular/core';
import { ModalsManager } from '../../../_common/modal/modal-manager';
@Component({
	selector: 'app-ui-modal',
	template: '<button class="btn btn-default" (click)="showSuccess()">Modal Tester</button>'
})
export class UIModalComponent implements AfterViewInit {
	constructor(public modal: ModalsManager, vcr: ViewContainerRef) {
		this.modal.setRootViewContainerRef(vcr);
	}
	ngAfterViewInit () {
	}
	showSuccess() {
		this.modal
			.show('info', 'You are awesome!', 'Success!', {
				onSuccess: () => {
					console.log('点击确定');
				},
				onError: () => {
					console.log('点击取消或删除');
				}
			})
			.then(() => {
				console.log('不是弹窗结束执行，立马执行');
			});
	}
}

