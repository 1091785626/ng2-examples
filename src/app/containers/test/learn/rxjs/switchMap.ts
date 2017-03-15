import { Observable } from 'rxjs/Rx';
// signature: switchMap(a: Observable): Observable

// 当 source emit 的时候，切换到 inner Observable ，并且 emit 他已经 emit 过的值。
export const switchMap = () => {
	const source = Observable.timer(0, 5000);
	// 切换到 inner Observable ，emit 已经 emit 过的值
	const example = source.switchMap(() => Observable.interval(500));
	// 输出：0,1,2,3,4,5,6,7,8,9.....0,1,2,3,4,5,6,7,8,9
	// const subscribe = example.subscribe(console.log);

	const sourceTwo = Observable.fromEvent(document, 'click');
	// 如果下一个 click 在 3s 内发生的话，不会产生新的 msg('Hello, I made it!')
	const exampleTwo = sourceTwo.switchMap(val => Observable.interval(3000).mapTo('Hello, I made it!'));
	// 输出：(click)...3s...'Hello, I made it!'...(click)...2s(click)...
	const subscribeTwo = exampleTwo.subscribe(console.log);
};
