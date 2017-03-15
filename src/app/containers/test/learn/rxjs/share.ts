import { Observable } from 'rxjs/Rx';
// signature: share(): Observable

// 在多个 subscriber 中共享 observable 。
export const share = () => {
	const source = Observable.timer(1000);
	const example = source
		.do(() => console.log('*** SIDE EFFECT ***'))
		.mapTo('*** RESULT ***');

	/*
	 * 如果不 share 的话，SIDE EFFECT 会执行两次
	 * 输出：
	 * *** SIDE EFFET ***
	 * *** RESULT ***
	 * *** SIDE EFFET ***
	 * *** RESULT ***
	*/
	const subscribe = example.subscribe(console.log);
	const subscribeTwo = example.subscribe(console.log);

	// 在 subscriber 中共享 observable
	const shareExample = example.share();

	/*
	 * 如果 share 的话，SIDE EFFECT 只会执行一次
	 * 输出：
	 * *** SIDE EFFECT ***
	 * *** RESULT ***
	 * *** RESULT ***
	 */
	const subscribeThree = shareExample.subscribe(console.log);
	const subscribeFour = shareExample.subscribe(console.log);
};
