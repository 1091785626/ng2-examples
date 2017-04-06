import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoadingService } from './loading.service';
type ajaxType = 'delete' | 'get' | 'put' | 'post' | 'jsonp';
@Injectable()
export class RequestService {
	constructor(private http: Http, private loadingService: LoadingService) {}

	ajax(ajaxType: ajaxType, url: string, param?: any, localData?: any): Observable<any> {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		const options = new RequestOptions({ headers: headers });
		if (localData) { // 使用缓存
			return Observable.of(localData);
		}
		this.loadingService.show();
		switch (ajaxType) {
			case 'delete':
			case 'get':
				let paramArray = [];
				for (const key in param) {
					if (param[key] || param[key] === false || param[key] === 0) {
						paramArray = [...paramArray, key + '=' + encodeURIComponent(param[key])];
					}
				}
				if (paramArray.length > 0) {
					url += (url.indexOf('?') > -1 ? '&' : '?') + paramArray.join('&');
				}
				return this.http[ajaxType](url, options).let(this.httpResult());
			case 'put':
			case 'post':
				return this.http[ajaxType](url, param, options).let(this.httpResult());
			default:
				return;
		};
	}
	httpResult () {
		return observableResult => observableResult
			.map((res: Response) => {
				this.loadingService.hide();
				const result = res;
				return result;
			})
			.catch((error: any) => {
				this.loadingService.hide();
				return Observable.throw(error || 'Server error');
			});
	}
}
