import { Observable } from 'rxjs/Rx';
// signature: buffer<T>(closingNotifier: Observable<any>): Observable<T[]>

// 缓冲所有输出的值，直到他们被提交。重复之。。。
export const buffer = () => {
	// 创建一个 observable ，每秒 emit 一个值
	const myInterval = Observable.interval(1000);

	// 创建一个 observable ，每当点击 document 的时候，emit 一个值
	const bufferBy = Observable.fromEvent(document, 'click');

	// 缓冲 interval observable emit 的所有值
	// 直到我们点击了 document ，这会使得 bufferBy Observable emit 一个值
	// 最后，把缓冲好的值，当作一个数组输出
	const myBufferedInterval = myInterval.buffer(bufferBy);
	// 打印到控制台
	// [1,2,3]...[4,5,6,7,8]
	const subscribe = myBufferedInterval.subscribe(val => console.log('Buffered Values', val));
};
