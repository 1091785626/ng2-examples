import { Observable } from 'rxjs/Rx';
// signature: defaultIfEmpty(defaultValue: any): Observable

// 当 Observable 为空时，使用这个设定的默认值，否则值为 null 。
export const defaultIfEmpty = () => {
	const empty = Observable.of();
	// 当 source Observable 的值为空时，使用这个默认值
	const exampleOne = empty.defaultIfEmpty('Observable.of() Empty!');
	// 输出：'Observable.of() Empty!'
	const subscribe = exampleOne.subscribe(val => console.log(val));

	// 空的 Observable
	const emptyTwo = Observable.empty();
	const exampleTwo = emptyTwo.defaultIfEmpty('Observable.empty()!');
	// 输出：'Observable.empty()!'
	// const subscribe = exampleTwo.subscribe(val => console.log(val));
};
