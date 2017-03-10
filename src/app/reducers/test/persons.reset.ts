// Reset Meta-Reducer
// v2 取消了 中间件，使用此方式代替
import * as types from '../../constants/actions/test';

const INIT = '__NOT_A_REAL_ACTION__';

export const testPersonsReset = reducer => {
	const initialState = reducer(undefined, {type: INIT});
	return function (state, action) {
		// if reset action is fired, return initial state
		if (action.type === types.TEST_PERSONS_RESET_STATE) {
			return initialState;
		}
		// calculate next state based on action
		const nextState = reducer(state, action);
		// return nextState as normal when not reset action
		return nextState;
	};
};
