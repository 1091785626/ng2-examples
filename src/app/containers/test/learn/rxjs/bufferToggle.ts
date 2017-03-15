import { Observable } from 'rxjs/Rx';
// signature: bufferToggle(openings: Observable<O>, closingSelector: Function): Observable<T[]>

// 打开 buffer ，使其捕捉 source emit 的值，关闭 buffer ，使其 emit 缓冲了的值。
export const bufferToggle = () => {
	// 每隔1秒 emit 值
	const sourceInterval = Observable.interval(1000);
	// 在5秒后，emit 值。接着每隔5秒 emit 值
	const startInterval = Observable.interval(5000);

	// 在3s后 emit 值，并且关闭对应的 buffer
	const closingInterval = val => {
		console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`);
		return Observable.interval(3000);
	};

	// 每隔5s就会开始一个新的 buffer ，缓冲3s内的所有 emit 过的值，然后 emit 缓冲好的值
	const bufferToggleInterval = sourceInterval.bufferToggle(startInterval, closingInterval);

	// 打印到控制台
	// Emitted Buffer：[4,5,6]...[9,10,11]
	const subscribe = bufferToggleInterval.subscribe(val => console.log('Emitted Buffer:', val));
};
