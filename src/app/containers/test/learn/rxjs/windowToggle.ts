import { Observable } from 'rxjs/Rx';
// signature: windowToggle(openings: Observable, closingSelector: function(value): Observable): Observable

// 跟 bufferTime 一样，除了 emit 的值是 nested Observable 而不是一个 array 。
export const windowToggle = () => {
	const source = Observable.timer(0, 1000);
	// 在第5s的时候 toggle window
	const toggle = Observable.interval(5000);
	const example = source
		// 每隔5s 打开 window
		.windowToggle(toggle, val => Observable.interval(val * 1000))
		.do(() => console.log('New Window!'));

	const subscribe = example
		// window emit 的值为 nested Observable
		.mergeAll();

	/*
	 * New Window!
	 * New Window!
	 * 10
	 * New Window!
	 * 15
	 * 16
	 * ...
	 */
};
