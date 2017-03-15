import { Observable } from 'rxjs/Rx';
// signature: retry(number: number): Observable

// 当发生 error 的时候，指定 retry 的次数。
export const retry = () => {
	const source = Observable.interval(1000);
	const example = source
		.map(val => {
			console.log(`emit：${val}`);
			return val;
		})
		.flatMap(val => { // 改成map不行
			console.log(`emit：${val}`);
			// 抛出 error
			if (val > 5) {
				return Observable.throw('Errro!');
			}
			return Observable.of(val);
		})
		// retry 2 times on error
		.retry(2);

	/*
	 * 输出：
	 * 0..1..2..3..4..5..
	 * 0..1..2..3..4..5..
	 * 0..1..2..3..4..5..
	 * Error! Retried 2 times when quit!
	 */
	const subscribe = example
		.subscribe({
			next: val => console.log(val),
			error: val => console.log(`${val}: Retried 2 times when quit!`)
		});
};
