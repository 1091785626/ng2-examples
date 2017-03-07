import { ActionReducer, Action } from '@ngrx/store';

import * as types from '../constants/actions/test';
export interface State {
	id: any;
	name: any;
	guests: any;
	attending: any;
}

export const initialState: State[] = [];

const details = (state: State, action: Action): State => {
	switch (action.type) {
		case types.TEST_PEASON_ADD_GUEST:
			if (state.id === action.payload) {
				state = {
					...state,
					guests: state.guests + 1
				};
			}
			return state;
		case types.TEST_PEASON_REMOVE_GUEST:
			if (state.id === action.payload) {
				state = {
					...state,
					guests: state.guests - 1
				};
			}
			return state;
		case types.TEST_PEASON_TOGGLE_ATTENDING:
			if (state.id === action.payload) {
				state = {
					...state,
					attending: !state.attending
				};
			}
			return state;
		default:
			return state;
	}
};

// remember to avoid mutation within reducers
export const reducer = (state = initialState, action: Action): State[] => {
	switch (action.type) {
		case types.TEST_PEASON_ADD_PERSON:
			state = [
				...state,
				{
					id: action.payload.id,
					name: action.payload.name,
					guests: 0,
					attending: false
				}
			];
			return state;
		case types.TEST_PEASON_REMOVE_PERSON:
			state = state.filter(person => person.id !== action.payload);
			return state;
		// to shorten our case statements,
		// delegate detail updates to second private reducer
		case types.TEST_PEASON_ADD_GUEST:
			state = state.map(person => details(person, action));
			return state;
		case types.TEST_PEASON_REMOVE_GUEST:
			state = state.map(person => details(person, action));
			return state;
		case types.TEST_PEASON_TOGGLE_ATTENDING:
			state = state.map(person => details(person, action));
			return state;
		// filter
		// case SHOW_ATTENDING:
		// 	return person => person.attending;
		// case SHOW_ALL:
		// 	return person => person;
		// case SHOW_WITH_GUESTS:
		// 	return person => person.guests;
		// default:
		// 	return state;
		default:
			return state;
	}
};
