import { combineReducers, ActionReducer } from '@ngrx/store';
import * as fromTest from './test';
import * as fromTestPerson from './test-person';
export interface State {
	test: fromTest.State;
	testPeople: fromTestPerson.State[];
}
export const rootReducer: ActionReducer<State> = combineReducers({
	test: fromTest.reducer,
	testPerson: fromTestPerson.reducer
});


