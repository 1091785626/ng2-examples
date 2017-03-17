import { Observable } from 'rxjs/Rx';
// signature: mergeMap(project: function: Observable, resultSelector: function: any, concurrent: number): Observable

// 把 source 的值先 map 到 inner Observable ，最后压扁返回。简而言之：map => mergeAll 。
export const mergeMap = () => {
	const source = Observable.of('Hello');
	// map 到 inner Observable ，并且 flatten 。
	const example = source.mergeMap(val => Observable.of(`${val} World!`));
	// 输出：Hello World!
	const subscribe = example.subscribe(val => console.log(val));

	// mergeMap 也可以 emit Promise
	const myPromise = val => new Promise(resolve => resolve(`${val} World from Promise!`));
	// map 到 promise ，然后 emit 最后结果
	const exampleTwo = source.mergeMap(val => myPromise(val));
	// 输出：Hello World From Promise!
	const subscribeTwo = exampleTwo.subscribe(val => console.log(val));

	/*
	* 你提供第2个参数，他可以接收 source 传来的值，然后在 inner Observable emit
	*/
	const exampleThree = source
		.mergeMap(val => myPromise(val),
			(valueFromSource, valueFromPromise) => {
			  return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`;
			}
		);

	// 输出：Source: Hello, Promise: Hello World From Promise!
	const subscribeThree = exampleThree.subscribe(val => console.log(val));
};
