import {
	Injectable,
	ComponentRef,
	ApplicationRef,
	ReflectiveInjector,
	ViewContainerRef,
	ComponentFactoryResolver,
} from '@angular/core';
import { ToastComponent } from './toast.component';
import { ToastOptions } from './toast-options';
import { Toast } from './toast';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
type State = 'success' | 'error' | 'warning' | 'info' | 'custom';
@Injectable()
export class ToastsManager {
	container: ComponentRef<any>;

	private index = 0;
	private handleClicked: Subject<Toast> = new Subject<Toast>();
	private _rootViewContainerRef: ViewContainerRef;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private appRef: ApplicationRef,
		private options: ToastOptions
	) {
	}

	setRootViewContainerRef(vRef: ViewContainerRef) {
		this._rootViewContainerRef = vRef;
	}

	/**
	 * 外部控制订阅者
	 */
	onExternalSubscribe(): Observable<Toast> {
		// 给外部订阅‘确定’用的
		return this.handleClicked.asObservable();
	}

	showItem(toast: Toast, options?: Object): Promise<Toast> {
		return new Promise((resolve, reject) => {

			if (!this.container) { // 连续加载不执行，第一次执行
				// 获得初始化时所在的组件
				if (!this._rootViewContainerRef) {
					try {
						this._rootViewContainerRef = this.appRef['_rootComponents'][0]['_hostElement'].vcRef;
					} catch (e) {
						reject(new Error('请在根组件中设置 使用 setRootViewContainerRef(vRef: ViewContainerRef) method.'));
					}
				}

				// 获得 options providers
				const providers = ReflectiveInjector.resolve([
					{provide: ToastOptions, useValue: this.options }
				]);

				// 创建和载入 ToastComponent
				const toastFactory = this.componentFactoryResolver.resolveComponentFactory(ToastComponent);
				// 获取父层创建子注射
				const childInjector = ReflectiveInjector.fromResolvedProviders(providers, this._rootViewContainerRef.parentInjector);
				// 创建
				this.container = this._rootViewContainerRef.createComponent(toastFactory, this._rootViewContainerRef.length, childInjector);
				// instance 表示ToastComponent的实例
				this.container.instance.handleClicked = (_toast: Toast) => {
					// _toast 传入参数 即new Toast
					this._handleClicked(_toast);
				};

				this.container.instance.onExit().subscribe(() => {
					this.dispose();
				});
			}

			resolve(this.setParamsForItem(toast, options));
		});
	}

	createTimeout(toast: Toast): any {
		const task = setTimeout(() => {
			this.clearItemData(toast);
		}, toast.config.toastLife);

		return task.toString();
	}
	// 设置参数给组件（单个）
	setParamsForItem(toast: Toast, options?: any): Toast { // 修改toast实例
		toast.id = ++this.index;

		if (options && options.hasOwnProperty('toastLife')) {
			options.dismiss = 'auto';
		}

		const customConfig: any = Object.assign({}, this.options, options || {});

		Object.keys(toast.config).forEach(k => {
			if (customConfig.hasOwnProperty(k)) {
				toast.config[k] = customConfig[k];
			}
		});

		if (toast.config.dismiss === 'auto') {
			toast.timeoutId = this.createTimeout(toast);
		}
		// 去设置组件的属性值
		this.container.instance.addItem(toast);
		return toast;
	}

	private _handleClicked(toast: Toast) {
		this.handleClicked.next(toast);
		if (toast.config.dismiss === 'click') {
			this.clearItemData(toast);
		}
	}

	dismissToast(toast: Toast) {
		this.clearItemData(toast);
	}

	clearItemData(toast: Toast) { // 清理选择的Toast
		if (this.container) {
			const instance = this.container.instance;
			instance.removeItem(toast);
			// 点击了确定，可以执行回调modal.data.onSuccess()
		}
	}

	clearAllItemsData() { // 清理全部的Toast
		if (this.container) {
			const instance = this.container.instance;
			instance.removeAllItems();
			this.dispose();
		}
	}

	dispose() { // 内存垃圾回收
		this.container.destroy();
		this.container = null;
	}
	show(type: State, message: string, title?: string, options?: any): Promise<Toast> {
		const data = options && options.data ? options.data : null;
		const onSuccess = options && options.onSuccess ? options.onSuccess : null;
		const onError = options && options.onError ? options.onError : null;
		const toast = new Toast(type, message, title, data, onSuccess, onError);
		return this.showItem(toast, options);
	}
}
