import { Observable } from 'rxjs/Rx';
// signature: race(): Observable

// 让第一个 Observable emit 。
export const race = () => {
	// 让第一个 Observable emit
	const example = Observable.race(
		Observable.interval(1500),
		Observable.interval(1000).mapTo('1s won!'),
		Observable.interval(2000),
		Observable.interval(2500)
	);
	// 输出：'1s won!'...'1s won!'...
	const subscribe = example.subscribe(val => console.log(val));
};
