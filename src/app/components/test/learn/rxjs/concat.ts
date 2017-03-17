import { Observable } from 'rxjs/Rx';
// signature: concat(observables: ...*): Observable

// 就像在 ATM 交易的队伍一样，直到上一个交易完毕，下一个才能开始


export const concat = () => {
	// emit 1,2,3
	const sourceOne = Observable.of(1, 2, 3);
	// emit 4,5,6
	const sourceTwo = Observable.of(4, 5, 6);

	// emit `sourceOne`，直到他 complete ，才开始 subscribe `sourceTwo`
	const concatSource = sourceOne.concat(sourceTwo);

	// 输出：1,2,3,4,5,6
	const subscribe = concatSource.subscribe(val => console.log('Example 1: Basic concat:', val));

	// 延迟3s再 emit
	const delayedSourceOne = sourceOne.delay(3000);
	// 等到 `delaySourceOne` complete 之后才开始 subscibe `sourceTwo`
	const concatDelayedSource = delayedSourceOne.concat(sourceTwo);

	// 输出：1,2,3,4,5,6
	const subscribeDelayed = concatDelayedSource.subscribe(val => console.log('Example 2: Delayed source one:', val));


	// 如果 `sourceOne` 永远不 complete ，那么永远也不会 subcribe 第二个 Observable
	const sourceOneNeverComplete = Observable
		.concat(
			Observable.interval(1000),
			Observable.of('Thiis', 'Never', 'Runs')
		)
		.delay(5000);

	// 输出：1,2,3,4....
	const subscribeNeverComplete = sourceOneNeverComplete.subscribe(val =>
		console.log('Example 3: Source never complete, Second Observable never run', val)
	);
};
