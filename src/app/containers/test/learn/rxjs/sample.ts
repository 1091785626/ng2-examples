import { Observable } from 'rxjs/Rx';
// signature: sample(sampler: Observable): Observable

// 当给定的 Observable emit 的时候，返回 source 最新的一个样本（sample）。
export const sample = () => {
	// 每隔1s emit 值
	const source = Observable.interval(1000);
	// 每隔2s ，返回 source 最新的值
	const example = source.sample(Observable.interval(2000));
	// 输出：2..4..6..8
	const subscribe = example.subscribe(val => console.log(val));


	const sourceTwo = Observable.zip(
		Observable.from(['Joe', 'Frank', 'Bo']),
		Observable.interval(2000)
	);
	// 每隔2.5s ，返回 sourceTwo 的最新值
	const exampleTwo = sourceTwo.sample(Observable.interval(2500));
	// 输出：['Joe', 0]...['Frank', 1]...
	// const subscribeTwo = exampleTwo.subscribe(console.log);
};
