import { ActionReducer, Action } from '@ngrx/store';

import * as types from '@constants/actions/test';
export interface State {
	id: any;
	name: any;
	guests: any;
	attending: any;
}

export const initialState: State[] = [];

const details = (state: State, action: any): State => {
	switch (action.type) {
		case types.TEST_PERSONS_ADD_GUEST:
			if (state.id === action.payload) {
				state = {
					...state,
					guests: state.guests + 1
				};
			}
			return state;
		case types.TEST_PERSONS_REMOVE_GUEST:
			if (state.id === action.payload) {
				state = {
					...state,
					guests: state.guests - 1
				};
			}
			return state;
		case types.TEST_PERSONS_TOGGLE_ATTENDING:
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
export const testPersons = (state = initialState, action: any): State[] => {
	switch (action.type) {
		case types.TEST_PERSONS_ADD_PERSON:
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
		case types.TEST_PERSONS_REMOVE_PERSON:
			state = state.filter(person => person.id !== action.payload);
			return state;
		case types.TEST_PERSONS_ADD_PERSON_POST + '_ON':
			// console.log('_ON');
			return state;
		case types.TEST_PERSONS_ADD_PERSON_GET + '_SUCCESS':
		case types.TEST_PERSONS_ADD_PERSON_POST + '_SUCCESS':
			// console.log('_SUCCESS');
			state = [
				...state,
				{
					id: action.param.id,
					name: action.param.name,
					guests: 0,
					attending: false
				}
			];
			return state;
		case types.TEST_PERSONS_ADD_PERSON_POST + '_ERROR':
			// console.log('_ERROR');
			return state;
		// to shorten our case statements,
		// delegate detail updates to second private reducer
		case types.TEST_PERSONS_ADD_GUEST:
			state = state.map(person => details(person, action));
			return state;
		case types.TEST_PERSONS_REMOVE_GUEST:
			state = state.map(person => details(person, action));
			return state;
		case types.TEST_PERSONS_TOGGLE_ATTENDING:
			state = state.map(person => details(person, action));
			return state;
		default:
			return state;
	}
};
