/**
 * 传递进来的参数设置
 */
export class Toast {
	id: number;
	// 表示重写默认值的对象
	config: any = {
		dismiss: 'auto',
		enableHTML: false,
		titleClass: '',
		messageClass: '',
		toastLife: 3000,
		showCloseButton: false,
	};
	// 定时器
	timeoutId: any;

	constructor(
		public type: string,
		public message: string,
		public title?: string,
		public data?: Object,
		public onSuccess?: () => void,
		public onError?: () => void
	) {

	}
}

