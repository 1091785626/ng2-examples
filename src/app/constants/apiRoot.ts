import test from './api/test';

const API: {[name: string]: string} = {
	...test
};
let baseUrl;
if ( process.env.NODE_ENV !== 'production' ) {
	baseUrl = 'http://localhost:8080';
}else {
	baseUrl = location.origin;
}
for ( const i in API) {
	if (API.hasOwnProperty(i)) {
		API[i] = baseUrl + API[i];
	}
};
export default API;

