import { Observable } from 'rxjs/Rx';
// signature: debounceTime(dueTime: number, scheduler: Scheduler): Observable

// 忽略 source Observable 某段时间内的 emit 的值。
export const debounceTime = () => {
	const input = document.getElementById('example');
	// 对于每个 keyup 事件，映射为当前 input 的值
	const example = Observable
		.fromEvent(input, 'keyup')
		.map((event: any) => {
			return event.currentTarget.value;
		});

	// 在 keyups 和 emit 当前值之间，等待 .5s
	const debouncedInput = example.debounceTime(500);

	// 输出
	const subscribe = debouncedInput.subscribe(val => {
		console.log(`Debounced Input: ${val}`);
	});
};
