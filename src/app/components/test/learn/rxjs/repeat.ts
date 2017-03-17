import { Observable } from 'rxjs/Rx';
// signature: repeat(scheduler: Scheduler, count: number): Observable

// 指定 source 重复的次数。
export const repeat = () => {
	// emit 'Repeat this!'
	const source = Observable.of('Repeat this');
	// 重复 source emit 的值3次
	const example = source.repeat(3);
	// 输出：Repeat this! ... Repeat this! ... Repeat this
	const subscribe = example.subscribe(val => console.log(val));

	const sourceTwo = Observable.interval(1000);
	// 取前5个值，重复2次
	const exampleTwo = sourceTwo.take(5).repeat(2);
	// 输出：0,1,2,3,4 ... 0,1,2,3,4
	const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
};
