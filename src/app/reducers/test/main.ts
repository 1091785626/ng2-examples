import { ActionReducer, Action } from '@ngrx/store';

import * as types from '../../constants/actions/test';

export interface State {
	counter: number;
};

export const initialState: State = {
	counter: 0
};

export const testMain = (state = initialState, action: Action): State => {
	switch (action.type) {
		case types.TEST_MAIN_INCREMENT:
			return {
				counter: state.counter + 1
			};
		default:
			return state;
	}
};
