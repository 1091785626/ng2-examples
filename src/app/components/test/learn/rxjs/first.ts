import { Observable } from 'rxjs/Rx';
// signature: first(predicate: function, select: function)

// emit 第一个值，或者第一个符合给定条件的值。
export const first = () => {
	const source = Observable.from([1, 2, 3, 4, 5]);
	// 没有传任何参数，那么就 emit 第一个值
	const example = source.first();
	// 输出：First Value: 1
	const subscribe_1 = example.subscribe(val => console.log(`First Value: ${val}`));

	// emit 第一个符合给定条件的值
	const exampleTwo = source.first(num => num === 5);
	// 输出：First to pass test: 5
	const subscribe_2 = exampleTwo.subscribe(val => console.log(`First to pass test: ${val}`));

	// 传递可选参数 project function
	const exampleThree = source.first(
		num => num % 2 === 0,
		(result, index) => `First even: ${result} is at index: ${index}`
	);
	// 输出：First even: 2 is at index 1
	const subscribeThree = exampleThree.subscribe(val => console.log(val));
};
