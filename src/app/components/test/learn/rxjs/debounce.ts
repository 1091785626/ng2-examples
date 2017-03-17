import { Observable } from 'rxjs/Rx';
// signature: debounce(durationSelector: function): Observable

// 忽略 source Observable 某段时间内的 emit 的值。
export const debounce = () => {
	// emit 4个字符串
	const example = Observable.of('WAIT', 'ONE', 'SECOND', 'Last will display');

	/*
	* 仅仅 emit 最后一个 emission 过后的1s的值
	* 其他的值丢掉
	*/
	const debouncedExample = example.debounce(() => Observable.timer(2000));

	/*
	* 在这个例子中，所有的值除了最后一个之外全部都忽略掉
	* 输出：'Last will display'
	*/
	const subscribe = debouncedExample.subscribe(val => console.log(val));


	// 每隔1s emit 一个值
	const interval = Observable.interval(1000);
	// 每隔1s 增加我们的 dobounce time
	const debouncedInterval = interval.debounce(val => Observable.timer(val * 200));

	/*
	* 在5s后，debounce time 就大于 interval time
	* 因此，未来的值都会被丢掉
	* 输出：0...1...2...3...4......(此时 debounce time 大于1s ，再也没有值 emit)
	*/

	const subscribeTwo = debouncedInterval.subscribe(val => console.log(`Example Two: ${val}`));
};
