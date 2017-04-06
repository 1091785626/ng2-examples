import {Injectable} from '@angular/core';

@Injectable()
export class LoadingService {

	private _selector = 'loading';
	private _element: HTMLElement;

	constructor() {
		this._element = document.getElementById(this._selector);
	}

	public show(): void {
		this._element.style['display'] = 'block';
	}

	public hide(delay = 200): void {
		setTimeout(() => {
			this._element.style['display'] = 'none';
		}, delay);
	}
}
