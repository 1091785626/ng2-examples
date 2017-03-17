import { Observable } from 'rxjs/Rx';
// signature: bufferCount<T>(bufferSize: number, startBufferEvery: number = null): Observable<T[]>

// 缓冲所有的输出值，直到某个数字被 fullfilled ，然后把它们 emit 。重复之。。。
export const bufferCount = () => {
	// 创建一个 Observable ，每秒 emit 一个 value 。
	const myInterval = Observable.interval(1000);

	// 当 emit 了三个值之后，把它们作为数组，输出。
	// const bufferThree = myInterval.bufferCount(3);

	// 打印到控制台
	// 比如，输出 [0,1,2]...[3,4,5]
	// const subscribe = bufferThree.subscribe(val => console.log(`Buffered Values:`, val));

	/*
	`bufferCount` 的第2个参数：什么时候开始下一个 buffer
	比如，bufferCount(3, 1)

	第一个时间间隔后：
	buffer 1: [0]

	第二个时间间隔后：
	buffer 1: [0,1]
	buffer 2: [1]

	第三个时间间隔后：
	buffer 1: [0,1,2]
	buffer 2: [1,2]
	buffer 3: [2]

	第四个时间间隔后：
	buffer 2: [1,2,3]
	buffer 3: [2,3]
	buffer 4: [3]
	*/

	const bufferEveryOne = myInterval.bufferCount(3, 1);
	// 打印到控制台
	const secondSubscribe = bufferEveryOne.subscribe(val => console.log('Start Buffer Every 1:', val));
};
