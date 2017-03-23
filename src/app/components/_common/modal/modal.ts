export class Modal {
	id: number;
	// 表示重写默认值的对象
	config: any = {
		enableHTML: false,
		titleClass: '',
		messageClass: '',
		showCloseButton: false
	};
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

