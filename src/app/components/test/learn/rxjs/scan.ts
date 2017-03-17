import { Observable, Subject } from 'rxjs/Rx';
// signature: scan(accumulator: function, seed: any): Observable

// reducer / 累加器
export const scan = () => {
	const testSubject = new Subject();
	// 最简单的 scan 的例子，从零开始累加
	const basicScan = testSubject
		.startWith(0)
		.scan((acc: any, curr: any) => acc + curr);
	// 输出累加后的值
	const subscribe = basicScan.subscribe(val => console.log('Accumulated total: ', val));

	testSubject.next(1); // 1
	testSubject.next(2); // 3
	testSubject.next(3); // 6

	const testSubjectTwo = new Subject();
	const objectScan = testSubjectTwo.scan((acc, curr) => Object.assign({}, acc, curr), {});
	const subscribe_2 = objectScan.subscribe(val => console.log('Accumulated object: ', val));

	testSubjectTwo.next({ name: 'Joe' }); // { name: 'Joe' }
	testSubjectTwo.next({ age: 30 }); // { name: 'Joe', age: 30 }
	testSubjectTwo.next({ favoriteLanguage: 'JavaScript' }); // { name: 'Joe', age: 30, favoriteLanguage: 'JavaScript' }
};
