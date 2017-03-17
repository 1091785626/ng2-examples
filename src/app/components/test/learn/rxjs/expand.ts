import { Observable } from 'rxjs/Rx';
// signature: expand(project: function, concurrent: number, scheduler: Scheduler): Observable

// 递归地调用给定的函数。
export const expand = () => {
	// emit 2
	const source = Observable.of(2);

	const example = source
		.expand(val => {
			// 2, 3, 4, 5
			console.log(`Passed value: ${val}`);
			// 3, 4, 5, 6
			return Observable.of(1 + val);
		})
		// 只调用 5 次
		.take(5);

	/*
	* RESULT: 2
	* Passed value: 2
	* RESULT: 3
	* Passed value: 3
	* RESULT: 4
	* Passed value: 4
	* RESULT: 5
	* Passed value: 5
	* RESULT: 6
	* Passes value: 6
	*/

	// 输出：2, 3, 4, 5, 6
	const subscribe = example.subscribe(val => console.log(`RESULT: ${val}`));
};
