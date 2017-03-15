import {Observable} from 'rxjs/Rx';
// signature: withLatestFrom(other: Observable, project: Function): Observable

// 当 source emit 的时候，同时也返回另一个 Obserable 最近 emit 的那个值。
export const withLatestFrom = () => {
	const source = Observable.interval(5000);
	const secondSource = Observable.interval(1000);
	const example = source
		.withLatestFrom(secondSource)
		.map(([first, second]) => `First Source(5s): ${first} Second Source(1s): ${second}`);

	/*
	 * First Source(5s): 0 Second Source(1s): 4
	 * First Source(5s): 1 Second Source(1s): 9
	 * First Source(5s): 2 Second Source(1s): 14
	 */
	const subscribe = example.subscribe(console.log);


	// withLastest 比 source 慢
	const exampleTwo = secondSource
		.withLatestFrom(source)
		.map(([first, second]) => `Source(1s): ${first} Latest from(5s): ${second}`);

	/*
	 * Source(1s): 4 Latest Lastest from(5s): 0
	 * Source(1s): 5 Latest Lastest from(5s): 0
	 * Source(1s): 6 Latest Lastest from(5s): 0
	 */
	const subscribeTwo = exampleTwo.subscribe(console.log);
};
