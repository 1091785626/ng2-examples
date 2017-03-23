import {
	Component,
	ChangeDetectorRef,
	NgZone, OnDestroy,
	AnimationTransitionEvent
} from '@angular/core';

import { Modal } from './modal';
import { inOut } from '../../../shared/animations/in-out.animations';
import { ModalOptions } from './modal-options';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-common-modal',
	templateUrl: './modal.html',
	styleUrls: ['./modal.scss'],
	animations: [inOut],
})
export class ModalComponent implements OnDestroy {
	messageClass: string;
	titleClass: string;
	animate: string;
	modals: Modal[] = [];

	private _fresh = true;
	private handleClicked: (modal: Modal) => void;

	private _onEnter: Subject<any> = new Subject();
	private _onExit: Subject<any> = new Subject();

	constructor(
		public sanitizer: DomSanitizer,
		private cdr: ChangeDetectorRef,
		private _zone: NgZone,
		options: ModalOptions
	) {
		Object.assign(this, options);
	}

	onEnter(): Observable<void> {
		return this._onEnter.asObservable();
	}

	onExit(): Observable<void> {
		return this._onExit.asObservable();
	}

	addItem(modal: Modal) {
		this.modals = [...this.modals, modal];

		if (this.animate === null && this._fresh) {
			this._fresh = false;
			this._onEnter.next();
			this._onEnter.complete();
		}
 		// ChangeDetectorRef 未解
		this.cdr.detectChanges();
	}
	handleClick(modal: Modal) { // 外部控制订阅者 , 比如一些回调，当然也可以直接做
		if (this.handleClicked) {
			this.handleClicked(modal);
		}
		// 点击了确定，可以执行回调modal.data.onSuccess()
		if (modal.onSuccess) {
			// 点击了取消，可以执行回调
			modal.onSuccess();
		}
	}
	// 查找单个
	findItem(modalId: number): Modal | void {
		for (const modal of this.modals) {
			if (modal.id === modalId) {
				return modal;
			}
		}
		return null;
	}
	anyItems(): boolean {
		return this.modals.length > 0;
	}
	// 移除单个
	removeItem(modal: Modal, state?: string) {
		this.modals = this.modals.filter((item) => {
			return item.id !== modal.id;
		});
		if (state === 'close' && modal.onError) {
			// 点击了取消，可以执行回调
			modal.onError();
		}
	}
	// 移除全部
	removeAllItems() {
		this.modals = [];
	}
	// 动画执行结束
	onAnimationEnd(event: AnimationTransitionEvent) {
		if (event.toState === 'void' && !this.anyItems()) {
			// 当执行 比如 fade -> void 动画且没有一个弹窗了执行回收垃圾
			this._ngExit();
		} else if (this._fresh && event.fromState === 'void') {
				// 第一次 动画加载完毕
				this._fresh = false;
				this._zone.run(() => {
					this._onEnter.next();
					// 订阅完成（取消订阅）
					this._onEnter.complete();
				});
		}

	}

	private _ngExit() {
		this._zone.onMicrotaskEmpty.first().subscribe(() => {
			this._onExit.next();
			// 订阅完成（取消订阅）
			this._onExit.complete();
		});
	}
	// 清理组件
	ngOnDestroy() {
		this._ngExit();
	}
}
