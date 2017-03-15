import { Observable } from 'rxjs/Rx';
// signature: windowWhen(closingSelector: function(): Observable): Observable

// 跟 bufferWhen 一样，除了 emit 的值是 nested Observable 而不是一个 array 。
export const windowWhen = () => {
	const source = Observable.timer(0, 1000);
	const example = source
		// 每隔5s就关闭wndow，并且 emit 从 source 中缓冲好的值
		.windowWhen(() => Observable.interval(5000))
		.do(() => console.log('New Window!'));

	const subscribe = example
		.mergeAll()
		/*
		 * New Window!
		 * 0
		 * 1
		 * 2
		 * 3
		 * 4
		 * New Window!
		 * 5
		 * 6
		 * 7
		 * 8
		 * 9
		 */
		.subscribe(console.log);
};
