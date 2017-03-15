import { Observable } from 'rxjs/Rx';
// signture: etryWhen(receives: notificationHandler, the: scheduler): Observable

// 在额外的逻辑的 retry 。
export const retryWhen = () => {
	const source = Observable.interval(1000);
	const example = source
		.map(val => {
			if (val > 5) {
				throw val;
			}
			return val;
		})
		.retryWhen(errors => errors
			.do(val => console.log(`Value ${val} was too high!`))
			.delayWhen((val: any) => Observable.timer(val * 1000))
		);

	/*
	 * 输出：
	 * 0
	 * 1
	 * 2
	 * 3
	 * 4
	 * 5
	 * Value 6 was too high!
	 * ... wait 5s then repeat
	 */
	const subscribe = example.subscribe(console.log);
};
