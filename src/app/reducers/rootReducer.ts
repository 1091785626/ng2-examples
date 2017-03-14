import { combineReducers, ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core';
import { test } from './test/root';
import { routerReducer } from '@ngrx/router-store';
const reducers = combineReducers({
	router: routerReducer,
	...test
});
export function rootReducer(state: any, action: any) {
    return reducers(state, action);
}


// 如果存在aot编译问题
// https://github.com/ngrx/store/issues/190

// https://github.com/ngrx/example-app/blob/bc6f113cc0907f986b6fedd5d0f5ccfed278219f/src/reducers/index.ts#L82-L100
