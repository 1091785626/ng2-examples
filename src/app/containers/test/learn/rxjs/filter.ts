import { Observable } from 'rxjs/Rx';
// signature: filter(select: Function, thisArg: any): Observable

// 只返回符合给定条件的值。
export const filter = () => {
	// emit (1, 2, 3, 4, 5)
	const source = Observable.from([1, 2, 3, 4, 5]);
	// 过滤掉不是偶数的值
	const example = source.filter(num => num % 2 === 0);
	// 输出：Even Number: 2, Even Number: 4
	const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));

	// emit ({ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 })
	const sourceTwo = Observable.from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }]);
	// 过滤掉30岁以下的
	const exampleTwo = sourceTwo.filter(person => person.age >= 300);
	// 输出：Over 30: Joe
	const subscribeTwo = exampleTwo.subscribe(val => console.log(`Over 30: ${val.name}`));
};
