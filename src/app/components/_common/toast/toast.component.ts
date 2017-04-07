import {
	Component,
	ChangeDetectorRef,
	NgZone, OnDestroy,
	AnimationTransitionEvent
} from '@angular/core';

import { Toast } from './toast';
import { inOut } from '@shared/animations/in-out.animations';
import { ToastOptions } from './toast-options';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-common-toast',
	templateUrl: './toast.html',
	styleUrls: ['./toast.scss'],
	animations: [inOut],
})
export class ToastComponent implements OnDestroy {
	position = 'fixed';
	messageClass: string;
	titleClass: string;
	positionClass: string;
	maxShown: number;
	newestOnTop: boolean;
	animate: string;
	toasts: Toast[] = [];

	private _fresh = true;
	private handleClicked: (toast: Toast) => void;

	private _onEnter: Subject<any> = new Subject();
	private _onExit: Subject<any> = new Subject();

	constructor(
		public sanitizer: DomSanitizer,
		private cdr: ChangeDetectorRef,
		private _zone: NgZone,
		options: ToastOptions
	) {
		Object.assign(this, options);
	}

	onEnter(): Observable<void> {
		return this._onEnter.asObservable();
	}

	onExit(): Observable<void> {
		return this._onExit.asObservable();
	}

	addItem(toast: Toast) {
		if (this.positionClass.indexOf('top') > 0) {
			if (this.newestOnTop) {
				this.toasts = [toast, ...this.toasts];
			} else {
				this.toasts = [...this.toasts, toast];
			}

			if (this.toasts.length > this.maxShown) {
				const diff = this.toasts.length - this.maxShown;

				if (this.newestOnTop) {
					// 取前5个 （maxShown=5)
					this.toasts = this.toasts.filter((item, index) => {
						return index < this.maxShown;
					});
				} else {
					// 取后5个 （maxShown=5）
					this.toasts = this.toasts.filter((item, index) => {
						return index >= diff;
					});
				}
			}
		} else {
			this.toasts = [toast, ...this.toasts];
			if (this.toasts.length > this.maxShown) {
				// 取前5个 （maxShown=5)
				this.toasts = this.toasts.filter((item, index) => {
					return index < this.maxShown;
				});
			}
		}

		if (this.animate === null && this._fresh) {
			this._fresh = false;
			this._onEnter.next();
			this._onEnter.complete();
		}
 		// ChangeDetectorRef 未解
		this.cdr.detectChanges();
	}


	handleClick(toast: Toast) { // 外部控制订阅者 , 比如一些回调，当然也可以直接做
		if (this.handleClicked) {
			this.handleClicked(toast);
		}
		// 点击了确定，可以执行回调toast.data.onSuccess()
	}

	findItem(toastId: number): Toast | void {
		for (const toast of this.toasts) {
			if (toast.id === toastId) {
				return toast;
			}
		}
		return null;
	}

	anyItems(): boolean {
		return this.toasts.length > 0;
	}

	removeItem(toast: Toast, state?: string) {
		if (toast.timeoutId) {
			clearTimeout(toast.timeoutId);
			toast.timeoutId = null;
		}

		this.toasts = this.toasts.filter((t) => {
			return t.id !== toast.id;
		});
		if (state === 'close') {
			// 点击了取消，可以执行回调modal.data.onError()
		}
	}

	removeAllItems() {
		this.toasts = [];
	}

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

	ngOnDestroy() {
		this._ngExit();
	}
}
