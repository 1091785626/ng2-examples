import {
	Injectable,
	ComponentRef,
	ApplicationRef,
	ReflectiveInjector,
	ViewContainerRef,
	ComponentFactoryResolver,
} from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalOptions } from './modal-options';
import { Modal } from './modal';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
type State = 'info' | 'custom';
@Injectable()
export class ModalsManager {
	container: ComponentRef<any>;

	private index = 0;
	private handleClicked: Subject<Modal> = new Subject<Modal>();
	private _rootViewContainerRef: ViewContainerRef;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private appRef: ApplicationRef,
		private options: ModalOptions
	) {
	}

	setRootViewContainerRef(vRef: ViewContainerRef) {
		this._rootViewContainerRef = vRef;
	}
	/**
	 * 外部控制订阅者
	 */
	onExternalSubscribe(): Observable<Modal> {
		// 给外部订阅‘确定’用的
		return this.handleClicked.asObservable();
	}

	showItem(modal: Modal, options?: Object): Promise<Modal> {
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
					{provide: ModalOptions, useValue: this.options }
				]);

				// 创建和载入 ModalComponent
				const modalFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
				// 获取父层创建子注射
				const childInjector = ReflectiveInjector.fromResolvedProviders(providers, this._rootViewContainerRef.parentInjector);
				// 创建
				this.container = this._rootViewContainerRef.createComponent(modalFactory, this._rootViewContainerRef.length, childInjector);
				// instance 表示modalComponent的实例
				this.container.instance.handleClicked = (_modal: Modal) => {
					// _modal 传入参数 即new Modal
					this._handleClicked(_modal);
				};
				this.container.instance.onExit().subscribe(() => {
					this.dispose();
				});
			}

			resolve(this.setParamsForItem(modal, options));
		});
	}
	// 设置参数给组件（单个）
	setParamsForItem(modal: Modal, options?: any): Modal { // 修改modal实例
		modal.id = ++this.index;


		const customConfig: any = Object.assign({}, this.options, options || {});

		Object.keys(modal.config).forEach(k => {
			if (customConfig.hasOwnProperty(k)) {
				modal.config[k] = customConfig[k];
			}
		});

		// 去设置组件的属性值
		this.container.instance.addItem(modal);
		return modal;
	}

	private _handleClicked(modal: Modal) {
		this.handleClicked.next(modal);
		this.clearItemData(modal);
	}

	clearItemData(modal: Modal) { // 清理选择的modal
		if (this.container) {
			const instance = this.container.instance;
			instance.removeItem(modal);
		}
	}

	clearAllItemsData() { // 清理全部的Modals
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


	show(type: State, message: string, title?: string, options?: any): Promise<Modal> {
		const data = options && options.data ? options.data : null;
		const onSuccess = options && options.onSuccess ? options.onSuccess : null;
		const onError = options && options.onError ? options.onError : null;
		const modal = new Modal('info', message, title, data, onSuccess, onError);
		return this.showItem(modal, options);
	}
}
