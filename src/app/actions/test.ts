
import { Action } from '@ngrx/store';
import * as types from '../constants/actions/test';

export { request } from './common/request';
// 之前react项目中使用过的方式
export const addPerson = (payload: {id: number, name: any}): Action => {
	return {
		type: types.TEST_PERSONS_ADD_PERSON,
		payload
	};
};
// ngrx/store 案例中使用的
// export class addPerson implements Action {
// 	type = types.TEST_PERSONS_ADD_PERSON;
// 	constructor(public payload: {id: number, name: any}) { }
// };

// 待定，下面这种快速开发可使用
export const addGuest = (id) => {
	return {
		type: types.TEST_PERSONS_ADD_GUEST,
		payload: id
	};
};
export const removeGuest = (id) => {
	return {
		type: types.TEST_PERSONS_REMOVE_GUEST,
		payload: id
	};
};
export const removePerson = (id) => {
	return {
		type: types.TEST_PERSONS_REMOVE_PERSON,
		payload: id
	};
};
export const toggleAttending = (id) => {
	return {
		type: types.TEST_PERSONS_TOGGLE_ATTENDING,
		payload: id
	};
};
export const updateFilter = (type) => {
	return {
		type
	};
};
export const resetParty = () => {
	return {
		type: types.TEST_PERSONS_RESET_STATE
	};
};
