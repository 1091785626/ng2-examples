import { Observable } from 'rxjs/Rx';
// signature: count(predicate: function): Observable

// 计算 source emit 值的数量，直到 complete 。
export const count = () => {
	// emit 1,2,3 然后 complete
	const threeItems = Observable.of(1, 2, 3);
	// 当 `threeItems` complete 的时候，计算他 emit 值得数量
	const exampleOne = threeItems.count();

	// 输出：`Count from Example One: 3'
	const subscribe = exampleOne.subscribe(val => console.log(`Count from Example One: `, val));


	// 数组的计数
	const myArray = [1, 2, 3, 4, 5];
	const myObsArray = Observable.from(myArray);
	const exampleTwo = myObsArray.count();

	// 输出：'Count of Basic Array: 5'
	const subscribeTwo = exampleTwo.subscribe(val => console.log(`Count of Basic Array: ${val}`));


	// 可选参数：计数符合 predicate function 的值
	const evensCount = myObsArray.count(val => val % 2 === 0);
	// 输出：'Count of Even Numbers: 2'
	const subscribeThree = evensCount.subscribe(val => console.log(`Count of Even Number: ${val}`));
};
