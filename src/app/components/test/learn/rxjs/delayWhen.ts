import { Observable } from 'rxjs/Rx';
// signature: delayWhen(selector: Function, sequence: Observable): Observable

// 根据指定的函数，延迟 emit 的时间。
export const delayWhen = () => {
	// 每隔1s emit 一个值
	const message = Observable.interval(3000);
	// 在5s后 emit 值
	const delayForFiveSeconds = () => Observable.timer(5000);
	// 在5s后，开始 emit 值
	const delayWhenExample = message.delayWhen(delayForFiveSeconds);

	// 输出：延迟5s后，
	// 5s....1...2...3
	const subscribe = delayWhenExample.subscribe(val => console.log(val));
};
