import { Observable } from 'rxjs/Rx';
// signature: ignoreElements(): Observable

// 忽略所有的东西，除了 complete 和 error 。
export const ignoreElements = () => {
	// 每隔500ms emit 值
	const source = Observable.interval(100);
	// 忽略一切东西除了 complete
	const example = source
		.take(5)
		.ignoreElements();
	// 输出：'COMPLETE!'
	const subscribe = example.subscribe(
		val => console.log(`NEXT: ${val}`),
		val => console.log(`ERROR: ${val}`),
		() => console.log(`COMPLETE`)
	);

	// 忽略一切东西除了 error
	const error = source
		.flatMap(val => {
			if (val === 4) {
				return Observable.throw(`ERROR AT ${val}`);
			}
			return Observable.of(val);
		})
		.ignoreElements();

	// 输出：ERROR: ERROR at 4
	const subscribeTwo = error.subscribe(
		val => console.log(`NEXT: ${val}`),
		err => console.log(`ERROR: ${err}`),
		() => console.log('SECOND COMPLETE')
	);
};
