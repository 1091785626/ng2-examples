import { Observable } from 'rxjs/Rx';
// signature: mapTo(value: any): Observable

// 每一次都映射（map）为一个常量。
export const mapTo = () => {
	const source = Observable.interval(2000);
	// 每个值都映射为一个常量
	const example = source.mapTo('HELLO WORLD!');
	// 输出：'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
	const subscribe = example.subscribe(val => console.log(val));


	// 每次点击 document 时都 emit
	const clickSource = Observable.fromEvent(document, 'click');
	// 把所有的 emission 都设为一个值
	const exampleTwo = clickSource.mapTo('GOODBYE WORLD!');
	// 输出：(click)'GOODBYE WORLD!'...
	const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
};
