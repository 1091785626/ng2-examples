import { Observable } from 'rxjs/Rx';
// signature: skipWhile(predicate: Function): Observable

// 跳过 source emit 的值，直到给定的条件为 false 。
export const skipWhile = () => {
	const source = Observable.interval(1000);
	const example = source.skipWhile(val => val < 5);
	// 输出：5...6...7...8.......
	const subscribe = example.subscribe(console.log);
};
