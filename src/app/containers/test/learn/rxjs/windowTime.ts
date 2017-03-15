import { Observable } from 'rxjs/Rx';
// signature: windowTime(windowTimeSpan: number, windowCreationInterval: number, scheduler: Scheduler): Observable

// 跟 bufferTime 一样，除了 emit 的值是 nested Observable 而不是一个 array 。
export const windowTime = () => {
	const source = Observable.timer(0, 1000);
	const example = source
	  // 每隔3s开始一个新的 window
	  .windowTime(3000)
	  .do(() => console.log('New Window!'));

	const subscribe = example
	  // window emit 的值为 nested Observable
	  .mergeAll()

	/*
	 * 输出
	 * New Window:
	 * 0
	 * 1
	 * 2
	 * New Window:
	 * 3
	 * 4
	 * 5
	 */
	 .subscribe(console.log);
};
