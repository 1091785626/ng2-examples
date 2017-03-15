import { Observable } from 'rxjs/Rx';
// signature: pluck(properties: ...args): Observable

// 挑选出嵌套的属性（nested property）。
export const pluck = () => {
	const source = Observable.from([
		{ name: 'Joe', age: 30 },
		{ name: 'Sarah', age: 35 },
	]);

	// 抓取所有的名字（name）
	const example = source.pluck('name');
	// 输出："Joe", "Sarch"
	const subscribe = example.subscribe(val => console.log(val));

	const sourceTwo = Observable.from([
		{ name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' }},
		// 如果没有找到 `job` 的话，就会返回 undefined
		{ name: 'Sarah', age: 25 },
	]);
	// 抓取在 `job` 里面的 `title`
	const exampleTwo = sourceTwo.pluck('job', 'title');
	// 输出：'Developer', undefined
	const subscribeTwo = exampleTwo.subscribe(val => console.log(val));
};
