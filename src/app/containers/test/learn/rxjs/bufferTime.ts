import { Observable } from 'rxjs/Rx';
// signature: bufferTime(bufferTimeSpan: number, bufferCreationInterval: number, scheduler: Scheduler): Observable<T[]>

// 缓冲输出的值，直到达到指定的时间点，然后把他们 emit 。重复之。。。
export const bufferTime = () => {
	// 创建一个 observable ，每隔 500ms 就会 emit 一个值
	const myInterval = Observable.interval(500);

	// 2秒后，把所有缓冲的值，作为一个数组输出
	const bufferTimer = myInterval.bufferTime(2000);

	// 输出值到控制台
	// 比如，输出 [0,1,2]...[3,4,5,6]
	const subscribe = bufferTimer.subscribe(val => console.log(`Buffered with Time:`, val));

	/*
	类似地，`bufferTime` 的第2个参数：什么时候开始下一个 buffer
	比如，bufferTime(2000, 1000)
	可能会输出：[0,1,2]...[1,2,3,4,5]...[3,4,5,6,7]
	*/
	const bufferTimeTwo = myInterval.bufferTime(2000, 1000);
	// 输出到控制台
	const secondSubscribe = bufferTimeTwo.subscribe(val => console.log(`Start buffer Every 1s`, val));
};
