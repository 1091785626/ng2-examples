import { ActionReducer, Action } from '@ngrx/store';

import * as types from '@constants/actions/test';
export type State = (person: any) => any;
// 不能使用这方式
// export interface State {
// 	(person: any): any;
// }
export const initialState: State = person => person;

export const testFilter = (state = initialState, action: Action): State => {
	switch (action.type) {
		case types.TEST_PERSONS_SHOW_ATTENDING:
			state = person => person.attending;
			return state;
		case types.TEST_PERSONS_SHOW_ALL:
			state = person => person;
			return state;
		case types.TEST_PERSONS_SHOW_WITH_GUESTS:
			state = person => person.guests;
			return state;
		default:
			return state;
	}
};
