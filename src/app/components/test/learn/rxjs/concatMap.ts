import { Observable } from 'rxjs/Rx';
// signature: concatMap(project: function, resultSelector: function): Observable

// 把 source Observable 的值映射到 inner Observable ，接着按顺序 subscribe 和 emit inner Observable 的值
export const concatMap = () => {
	// emit 'Hello' 和 'Goodbye'
	const source = Observable.of('Hello', 'Goodbye');
	// 把 source value 映射到 inner Observable ，当 complete 时，emit 结果，接着下一个。
	const exampleOne = source.concatMap(val => Observable.of(`${val} World!`));

	// 输出：`Example One: 'Hello World', Example One: 'Goodbye World'
	const subscribe = exampleOne.subscribe(val => console.log('Example One:', val));


	// 结合 promise 的例子
	const examplePromise = val => new Promise(resolve => resolve(`${val} World`));
	// 把 source value 映射到 inner Observable ，当 complete 时，emit 结果，接着下一个。
	const exampleTwo = source.concatMap(val => examplePromise(val));

	// 输出：`Example w/ Promise: 'Hello World', Exmaple w/ Promise: 'Goodbye World'
	const subscribeTwo = exampleTwo.subscribe(val => console.log('Exmaple w/ Promise', val));


	// 第一个参数返回的值，会传给第二个参数
	const exampleWithSelector = source.concatMap(val => examplePromise(val), result => `${result} w/ selector!`);

	// 输出：Example w/ Selector: 'Hello w/ Selector', Example w/ Selector: 'Goodbye w/ Selector'
	const subscribeThree = exampleWithSelector
	  .delay(2000)
	  .subscribe(val => console.log('Exmaple w/ Selector', val));
};
