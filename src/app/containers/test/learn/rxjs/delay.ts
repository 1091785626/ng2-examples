import { Observable } from 'rxjs/Rx';
// signature: delay(delay: number | Date, scheduler: Scheduler): Observable

// 延迟 Observable emit 的时间。
export const delay = () => {
	const example = Observable.of(null);

	const merge = example.merge(
		example.mapTo('Hello'),
		example.mapTo('World').delay(1000),
		example.mapTo('Goodbye').delay(2000),
		example.mapTo('World!').delay(3000)
	);

	// 输出：'Hello'...'World'...'Goodbye'...'World!'
	const subscribe = merge.subscribe(val => console.log(val));
};
