import { Observable } from 'rxjs/Rx';
// signature: skipUntil(the: Observable): Observable

// 跳过 source emit 的值，直到 inner Observable emit 。
export const skipUntil = () => {
	const source = Observable.interval(1000);
	// 跳过 source emit 的值，直到 inner Observable emit 。
	const example = source.skipUntil(Observable.timer(6000));
	// 输出：5...6...7...8...
	const subscribe = example.subscribe(console.log);
};
