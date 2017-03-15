import { Observable } from 'rxjs/Rx';
// signature: startWith(an: Values): Observable

// 指定第一个 emit 的值。
export const startWith = () => {
	const source = Observable.from([1, 2, 3]);
	const example = source.startWith(0);
	// 输出：0,1,2,3
	const subscribe_1 = example.subscribe(console.log);

	const sourceTwo = Observable.of('World! ', 'Goodbye', 'World!');
	const exampleTwo = sourceTwo
	  .startWith('Hello')
	  .scan((acc, curr) => `${acc} ${curr}`);

	// 输出：
	// Hello
	// Hello Wrold!
	// Hello World! Goodybe
	// Hello World! Goodbye World!
	const subscribe_2 = exampleTwo.subscribe(console.log);
};
