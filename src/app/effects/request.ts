import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Effect, Actions, toPayload , EffectsModule } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import API_ROOT from '../constants/apiRoot';
import {RequestService} from '../services/request.service';
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
	// 他会被subscribe(next, error) 会自己去触发一些action
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
				ajaxType,
				param
			} = params;
			params = {
				...params,
				data: null
			};
			const  {localData} = opts;
			// dispatch on action
			this.store.dispatch(nextAction(apiName + '_ON', params, opts));
			return this.request.ajax(ajaxType, API_ROOT[apiName], param, localData)
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
		});
	@Effect({ dispatch: false })
		logActions$ = this.actions$
			.do(action => {
				// console.log(action);
		});
	constructor(
		private http: Http,
		private actions$: Actions,
		private store: Store<any>,
		private request: RequestService,

	) { }
};
export const requestEffecting = EffectsModule.run(RequestEffects);
