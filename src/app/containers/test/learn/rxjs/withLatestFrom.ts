import {Observable} from 'rxjs/Rx';
/**
 * The withLatestFrom operator is similar,
 * except it only combines the last emitted values from the provided observables
 * when the source observable emits. This is useful when your projection depends
 * first on a single source, aided by multiple other sources.
 */
export const withLatestFrom = () => {
	// Create an observable that emits a value every second
	const myInterval = Observable.interval(1000);
	// Create an observable that emits immediately, then every 5 seconds
	const myTimer = Observable.timer(0, 5000);
	// Every time interval emits, also get latest from timer and add the two values
	const latest = myInterval
		.withLatestFrom(myTimer)
		.map(([interval, timer]) => {
		console.log(`Latest Interval: ${interval}`);
		console.log(`Latest Timer: ${timer}`);
		return interval + timer;
	});
	// log total
	const subscribe = latest.subscribe(val => console.log(`Total: ${val}`));
};
