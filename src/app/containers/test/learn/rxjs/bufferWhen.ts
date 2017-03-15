import { Observable } from 'rxjs/Rx';
// signature: bufferWhen(closingSelector: function): Observable<T[]>

// 缓冲所有的值直到 closing selector emit 值，接着 emit 缓冲好的值
export const bufferWhen = () => {
	// 每隔1s emit 一个值
	const oneSecondInterval = Observable.interval(1000);
	// 每隔5秒 emit 一个值
	const fiveSecondInterval = () => Observable.interval(5000);

	// 每隔5秒 emit 缓冲了的值
	const bufferWhenExample = oneSecondInterval.bufferWhen(fiveSecondInterval);

	// 打印到控制台
	// [0,1,2,3]...[4,5,6,7,8]
	const subscribe = bufferWhenExample.subscribe(val => console.log('Emitted Buffer', val));
};
