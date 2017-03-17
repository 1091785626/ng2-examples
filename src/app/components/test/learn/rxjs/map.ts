import { Observable } from 'rxjs/Rx';
// signature: map(project: Function, thisArg: any): Observable

// 把每个值都应用到 project function ，映射为新的值。
export const map = () => {
	// emit (1, 2, 3, 4, 5)
	// const source = Observable.of([1, 2, 3, 4, 5]);
	const source = Observable.from([1, 2, 3, 4, 5]);
	// 每个值都加10
	const example = source.map((val: any) => val + 10);
	// 输出：11, 12, 13, 14, 15
	const subscribe = example.subscribe(val => console.log(val));


	// emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
	const sourceTwo =  Observable.from([{name: 'Joe', age: 30}, {name: 'Frank', age: 20}, { name: 'Ryan', age: 50}]);
	// 获取每个人的名字
	const exampleTwo = sourceTwo.map(person => person.name);
	// 输出："Joe", "Frank", "Ryan"
	const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
};
