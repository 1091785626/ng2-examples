import { Observable } from 'rxjs/Rx';
// signature: combineAll(project: function): Observable
// 当 outer Observable complete 的时候，输出 inner Observable 最新的值
export const combineAll = () => {
	// 5s 后 emit 值，然后 complete
	// const fiveSecondTimer = Observable.timer(5000);

	// 当 timer(outer Observable) 触发以及完成时，
	// 输出 inner Observable 最新的值，在例子中就是一个单独的值
	// const example = fiveSecondTimer.mapTo(Observable.of('Hello', 'World'));
	// const combined = example.combineAll();

	// 输出：['Hello']...['World']
	// const subscribe = combined.subscribe(val => console.log(`Values from inner observable`, val));

	// 我们也可以传一个 project function 去接收 emit 的值
	const fiveSecondTimer = Observable.timer(5000);
	const example = fiveSecondTimer.mapTo(Observable.of('Hello', 'Goodbye'));
	const combined = example.combineAll(val => `${val} Friend!`);

	// 输出：`Hello Friend!' ... 'Goodbye Friend!'
	// const subscribeProjected = combined.subscribe(val => console.log(`Values Using Projection`, val));
};
