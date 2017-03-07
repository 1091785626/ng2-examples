import { combineReducers, ActionReducer } from '@ngrx/store';
import { test } from './test/root';

export const rootReducer: ActionReducer<any> = combineReducers({
	...test
});


