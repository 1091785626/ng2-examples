import { Observable } from 'rxjs/Rx';
// signature: zip(observables: *): Observable

// 等到所有的 Observable 都 emit 之后，才作为数组返回。
export const zip = () => {
	const sourceOne = Observable.of('Hello');
	const sourceTwo = Observable.of('World');
	const sourceThree = Observable.of('Goodbye');
	const sourceFour = Observable.of('World!');
	// 等到所有的 Observable 都 emit 之后，才把它们作为数组 emit 出去
	const example = Observable
		.zip(
			sourceOne,
			sourceTwo.delay(1000),
			sourceThree.delay(2000),
			sourceFour.delay(3000)
		);
	// 输出：['Hello', 'World', 'Goodbye', 'World!']
	const subscribe = example.subscribe(console.log);

	// 每隔1s emit
	const interval = Observable.interval(1000);
	// 当一个 Observable complete 后，再也不会 emit 任何值
	const exampleTwo = Observable
		.zip(
			interval,
			interval.take(2)
		);
	// 输出：[0, 0]...[1,1]
	const subscribeTwo = exampleTwo.subscribe(console.log);
};
