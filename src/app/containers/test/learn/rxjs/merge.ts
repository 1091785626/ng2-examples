import { Observable } from 'rxjs/Rx';
// signature: merge(input: Observable): Observable

// 把多个 Observable 压扁为一个 Observable 。
export const merge = () => {
	// 每隔2.5s emit 值
	const first = Observable.interval(2500);
	// 每隔2s emit 值
	const second = Observable.interval(2000);
	// 每隔1.5s emit 值
	const third = Observable.interval(1500);
	// 每隔1s emit 值
	const fourth = Observable.interval(1000);

	// 把多个 Observable 合并为一个单独的 Observable
	const example = Observable.merge(
		first.mapTo('FIRST'),
		second.mapTo('SECOND'),
		third.mapTo('THIRD'),
		fourth.mapTo('FOURTH')
	);

	// 输出：'FOURTH', 'THIRD', 'SECOND', 'FOURTH', 'FIRST', 'THIRD', 'FOURTH'...
	// const subscribe = example.subscribe(val => console.log(val));

	// merge 可以当作 Observable instance 的一个方法
	const exampleTwo = first.merge(fourth);
	// 输出：0, 1, 0, 2...
	const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
};
