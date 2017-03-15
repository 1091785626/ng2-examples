import { Observable } from 'rxjs/Rx';
// signature: window(windowBoundaries: Observable): Observable

// 类似于 buffer ，但是返回的是 nested Observable 。
export const window = () => {
	// 马上 emit ，然后每隔1s emit
	const source = Observable.timer(0, 1000);
	const example = source
		.window(Observable.interval(3000));

	const count = example.scan((acc, curr) => acc + 1, 0);

	/*
	 * window 1:
	 * 0
	 * 1
	 * 2
	 * window 2:
	 * 3
	 * 4
	 * 5
	*/
	const subscribe = count.subscribe(val => console.log(`Window ${val}:`));
	const subscribeTwo = example.mergeAll().subscribe(val => console.log(val));
};
