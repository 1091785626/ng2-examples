import { Observable , Notification } from 'rxjs/Rx';
// sigature: dematerialize(): Observable

// 把 notification object 变成 notification values
export const dematerialize = () => {
	// emit next notification 和 error notification
	const source = Observable
		.from([
			Notification.createNext('SUCCESS'),
			Notification.createError('ERROR!')
		])
		// 把 notification object 变成 notification values
		.dematerialize();

	// 输出：`NEXT VALUE: SUCCESS' 'ERROR VALUE: 'ERROR!'
	const subscriptionn = source.subscribe({
		next: val => console.log(`NEXT VALUE: ${val}`),
		error: val => console.log(`ERROR VALUE: ${val}`),
	});
};
