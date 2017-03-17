import { Observable } from 'rxjs/Rx';
// signature: windowCount(windowSize: number, startWindowEvery: number): Observable

// source emit 的值是 Observable ，emit 的间隔是指定的时间。
export const windowCount = () => {
	// 每隔1s emit
	const source = Observable.interval(1000);
	const example = source
		// 每隔4个值就开始新的 window
		.windowCount(4)
		.do(() => console.log('NEW WINDOW!'));

	const subscribeTwo = example
		// window emit 的是 nested Observable
		.mergeAll()
		.subscribe(console.log);
	/*
	 * 输出：
	 * NEW WINDOW!
	 * 0
	 * 1
	 * 2
	 * 3
	 * NEW WINDOW!
	 * 4
	 * 5
	 * 6
	 * 7
	*/
};
