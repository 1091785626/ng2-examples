import { Observable } from 'rxjs/Rx';
// signature: concatMapTo(observable: Observable, resultSelector: function): Observable

// 当 source emit 的时候，总是 subscribe 相同的 Observable ，当 complete 时合并结果
export const concatMapTo = () => {
	// 每隔2s emit 一个值
	const interval = Observable.interval(2000);
	const message = Observable.of(`Second(s) elapsed!`);

	// 当 `interval` emit 时，subscribe `message` 直到他 complete ，最后合并结果
	const example = interval.concatMapTo(message, (time, msg) => `${time} ${msg}`);

	// 输出：`0 Second(s) elapsed! 1 Second(s) elapsed!`
	// const subscribe = example.subscribe(val => console.log(val));

	// 每隔1s emit 一个值，取前5个
	const basicTimer = Observable.interval(1000).take(5);

	/*
	* ***注意***
	* 像这种 source Observable emit 的速度比 inner Observable complete 快的情景下，
	* 就会出现内存问题
	* (`interval` emit 时间间隔为1s ，而 `basicTimer` complete 则需要5s)
	*/

	// `basicTimer` 会在 5s 后 complete ，emit 的值有：0,1,2,3,4
	const exampleTwo = interval
		.concatMapTo(basicTimer, (firstInterval, secondInterval) => `${firstInterval} ${secondInterval}`);

	/* 输出：
	* 0 0
	* 0 1
	* 0 2
	* 0 3
	* 0 4
	* 1 0
	* 1 1
	* continue...
	*/

	const subscribe = exampleTwo.subscribe(val => console.log(val));
};
