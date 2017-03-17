import { Observable } from 'rxjs/Rx';
// signature: signature: single(a: Function): Observable

// emit 符合条件的一个单独的值。
export const single = () => {
	// emit (1,2,3,4,6)
	const source = Observable.from([1, 2, 3, 4, 5]);
	// emit 符合条件的一个 value
	const example = source.single(val => val === 4);
	// 输出：4
	const subscribe = example.subscribe(console.log);
};
