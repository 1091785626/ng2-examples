import * as types from '../../constants/actions/_common';
interface Params {
	onError: any;
	onSuccess: any;
	ajaxType: string;
	param?: any;
}
export const request = (apiName: string, params, opts = {}) => {
	const action = {
		'API': {
			apiName: apiName,
			params: params,
			opts: opts
		},
		type: types.API_REQUEST
	};
	return action;
};
