import { Observable } from 'rxjs/Rx';
// signature: publish() : ConnectableObservable

// 什么事情都不做，直到调用 connect ，共享 source 。
export const publish = () => {
	const source = Observable.interval(1000);
	const example = source
		// side effect
		.do(() => console.log('Do something'))
		// 直到调用 connect() ，否则什么事情都不会发生
		.publish();

	/*
	 * source 不会 emit 值，直到调用 connect 方法
	 * 输出：（5s 后）
	 * 'Do Something'
	 * 'Subscriber One: 0'
	 * 'Subscriber Two: 0'
	 * 'Do something'
	 * 'Subscriber One: 1'
	 * 'Subscriber Two: 1'
	 */
	const subscribe = example.subscribe(val => console.log(val));
	const subscribeTwo = example.subscribe(val => console.log(val));

	// 5秒后调用 connect 方法，这会引起 source 开始 emit 值
	setTimeout(() => {
	  example.connect();
	}, 5000);
};
