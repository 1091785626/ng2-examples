import { Observable } from 'rxjs/Rx';
// signature: groupBy(keySelector: Function, elementSelector: Function): Observable

// 按照给定的值，分组到 Observable。
export const groupBy = () => {
	const people = [{name: 'Sue', age: 25}, { name: 'Joe', age: 30}, { name: 'Frank', age: 25}, {name: 'Sarah', age: 35}];
	const source = Observable.from(people);
	// 按年龄分组
	const example = source
		.groupBy(person => {
			return person.age;
		})
		// 每个分组作为数组返回
		.map(person => {
			console.log(1, person);
			return person;
		})
		.flatMap((group) => {
			console.log(group);
			return group.reduce((acc, curr) => [...acc, curr], []);
		});


	/*
	* 输出：
	* [{age: 25, name: 'Sue'}, {age: 25, name: 'Frank'}]
	* [{age: 30, name: 'joe'}]
	* [{age: 35, name: 'Sarah'}]
	*/

	const subscribe = example.subscribe(val => console.log(val));
};
