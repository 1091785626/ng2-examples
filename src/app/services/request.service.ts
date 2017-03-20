import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
type ajaxType = 'delete' | 'get' | 'put' | 'post';
@Injectable()
export class RequestService {
	constructor(private http: Http) {}

	ajax(ajaxType: ajaxType, url: string, param: any): Observable<any> {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		const options = new RequestOptions({ headers: headers });
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
				return this.http[ajaxType](url, options);
			case 'put':
			case 'post':
				return this.http[ajaxType](url, param, options);
			default:
				return;
		};
	}
}
