import { Observable } from 'rxjs/Rx';
// signature: skip(the: Number): Observable

// 跳过指定数量的 emitted value 。
export const skip = () => {
	const source = Observable.interval(1000);
	// 跳过前5个 emitted value
	const example = source.skip(5);
	// 输出：5..6..7..8...
	const subscribe = example.subscribe(console.log);
};
