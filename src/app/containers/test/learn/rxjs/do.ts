import { Observable } from 'rxjs/Rx';
// signature: do(nextOrObserver: function, error: function, complete: function): Observable

// 显式地进行某些 action ，比如 logging
export const _do = () => {
	const source = Observable.of(1, 2, 3, 4, 5);

	// 通过 do ，显式地打印某些值
	const example = source
		// .do((val: any) => console.log(`BEFORE MAP: ${val}`)
		.map((val: any) => val + 10)
		.do((val: any) => console.log(`AFTER MAP: ${val}`));

	// `do` 是不会 emit 值
	const subscribe = example.subscribe(val => console.log(val));
};
