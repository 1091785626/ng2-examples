import { Observable } from 'rxjs/Rx';
// signature: every(predicate: function, thisArg: any): Observable

// 检测是否「所有 emit 的值」都符合某个条件。
export const every = () => {
	// emit 5个值
	const source = Observable.of(1, 2, 3, 4, 5);
	const example = source
		.every(val => val % 2 === 0);

	// 输出：false
	const subscribe_1 = example.subscribe(val => console.log(val));


	// emit 5个值
	const allEvens = Observable.of(2, 4, 6, 8, 10);
	const exampleTwo = allEvens
		// 是否每个值都是偶数
		.every(val => val % 2 === 0);

	// 输出：true
	const subscribe_2 = exampleTwo.subscribe(val => console.log(val));
};
