import { Observable } from 'rxjs/Rx';
// signature: last(predicate: function): Observable

// emit 最后一个值，或者最后一个通过 test 的值。
export const last = () => {
	const source = Observable.from([1, 2, 3, 4, 5]);
	// 没有传参数，emit 最后一个值
	const example = source.last();
	// 输出："Last value: 5"
	const subscribe = example.subscribe(val => console.log(`Last value: ${val}`));

	// emit 最后一个偶数
	const exampleTwo = source.last(num => num % 2 === 0);
	// 输出：Last to pass test: 4
	const subscribeTwo = exampleTwo.subscribe(val => console.log(`Last to pass test: ${val}`));
};
