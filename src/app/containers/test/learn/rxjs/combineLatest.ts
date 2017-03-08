import {Observable} from 'rxjs/Rx';
/**
 * The combineLatest operator accepts an unspecified number of observables,
 * emitting the last emitted value from each when any of the provided observables emit.
 * These values are passed to a projection function for you to form the appropriate projection.
 */
export const combineLatest = () => {
	// timerOne emits first value at 1s, then once every 4s
	const timerOne = Observable.timer(1000, 4000);
	// timerTwo emits first value at 2s, then once every 4s
	const timerTwo = Observable.timer(2000, 4000);
	// timerThree emits first value at 3s, then once every 4s
	const timerThree = Observable.timer(3000, 4000);

	// when one timer emits, emit the latest values from each timer as an array
	// const combined = Observable
	// 	.combineLatest(
	// 			timerOne,
	// 			timerTwo,
	// 			timerThree
	// 	);

	// const subscribe = combined.subscribe(latestValues => {
	// 	// grab latest emitted values for timers one, two, and three
	// 	const [timerValOne, timerValTwo, timerValThree] = latestValues;
	// 	console.log(
	// 		`\nTimer One Latest: ${timerValOne},
	// 		 \nTimer Two Latest: ${timerValTwo},
	// 		 \nTimer Three Latest: ${timerValThree}`
	// 	 );
	// });

	// combineLatest also takes an optional projection function
	const combinedProject = Observable
		.combineLatest(
			timerOne,
			timerTwo,
			timerThree,
			(one, two, three) => {
				return `Timer One (Proj) Latest: ${one},
				\nTimer Two (Proj) Latest: ${two},
				\nTimer Three (Proj) Latest: ${three}
				\n`;
			}
		);
	// log values
	const subscribe = combinedProject.subscribe(
		latestValuesProject => console.log(latestValuesProject)
	);
};
