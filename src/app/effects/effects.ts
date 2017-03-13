import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Effect, Actions, toPayload , EffectsModule } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import API_ROOT from '../constants/apiRoot';
const nextAction = (type, param, opts) => {
	const action = {};
	action['type'] = type;
	action['opts'] = opts;
	action['param'] = param;
	delete param['onSuccess'];
	delete param['onError'];
	return {...action, ...param};
};
@Injectable()
export class RequestEffects {
	@Effect()
	request$: Observable<Action> = this.actions$
		.ofType('API_REQUEST')
		.map((action: any) => {
			return action['API'];
		})
		.switchMap((API_OPT) => {
			let params = API_OPT.params;
			const apiName = API_OPT.apiName;
			const opts = API_OPT.opts;
			const {
				onSuccess,
				onError,
				ajaxType = 'post' || 'get' || 'delete' || 'put',
				param
			} = params;
			params = {
				...params,
				data: null
			};
			const  {localData} = opts;
			// dispatch on action
			this.store.dispatch(nextAction(apiName + '_ON', params, opts));
			const resultFn = () => {
				return (ObservableResult: any) => {
					return ObservableResult
						.map((res) => {
							params = {
								...params,
								data: res._body
							};
							if ( onSuccess ) {
								onSuccess();
							}
							// If successful, dispatch success action
							return nextAction(apiName + '_SUCCESS', params, opts);
						})
						.catch((res) => {
							if ( onError ) {
								onError();
							}
							// If request fails, dispatch failed action
							return of(nextAction(apiName + '_ERROR', params, opts));
						});
				};
			};
			if ( localData ) {
				return ;
			}
			const headers = new Headers({ 'Content-Type': 'application/json' });
			const options = new RequestOptions({ headers: headers });
			switch (ajaxType) {
				case 'delete':
				case 'get':
					let paramArray = [];
					let url = API_ROOT[apiName];
					for (const key in param) {
						if (param[key] || param[key] === false || param[key] === 0) {
							paramArray = [...paramArray, key + '=' + encodeURIComponent(param[key])];
						}
					}
					if (paramArray.length > 0) {
						url += (url.indexOf('?') > -1 ? '&' : '?') + paramArray.join('&');
					}
					return this.http.get(url, options).let(resultFn());
				case 'put':
				case 'post':
					return this.http[ajaxType](API_ROOT[apiName], param, options).let(resultFn());
				default:
					return;
			};
		});
	@Effect({ dispatch: false })
		logActions$ = this.actions$
			.do(action => {
				// console.log(action);
		});
	constructor(
		private http: Http,
		private actions$: Actions,
		private store: Store<any>
	) { }
};
export const effecting = EffectsModule.run(RequestEffects);
