import { Observable } from 'rxjs/Rx';
// signature: combineLatest(observables: ...Observable, project: function): Observable

// 给定一组 Observable ，当其中一个 emit 的时候，其他的 emit 最新的值
export const combineLatest = () => {
	// `timerOne` 会在第1s的时候 emit 第一个值，接着每隔4s emit
	const timerOne = Observable.timer(1000, 4000);
	// `timerTwo` 会在第2s的时候 emit 第一个值，接着每隔4s emit
	const timerTwo = Observable.timer(2000, 4000);
	// `timerThree` 会在第3s的时候 emit 第一个值，接着每隔4s emit
	const timerThree = Observable.timer(3000, 4000);

	// 当其中一个 timer emit 的时候，其他的也同时 emit 最新的值，作为一个数组返回
	const combined = Observable
		.combineLatest(
			timerOne,
			timerTwo,
			timerThree
		);
	const subscribe = combined.subscribe(latestValues => {
		const [timerValOne, timerValTwo, timerValThree] = latestValues;

		// timerOne first tick: timer One Latest: 1, Timer Two Latest: 0, Timer Three Latest: 0
		// timerOne first tick: timer One Latest: 1, Timer Two Latest: 1, Timer Trhee Latest: 0
		// timerOne first tick: timer One Latest: 1, Timer Two Latest: 1, Timer Trhee Latest: 1

		console.log(
				`Timer One Latest: ${timerValOne}`,
				`Timer Two Latest: ${timerValTwo}`,
				`Timer Three Latest: ${timerValThree}`
			);
	});

	// `combineLastest` 也可以接收一个可选的参数：projection function
	// const combinedProject = Observable
	// 	.combineLatest(
	// 		timerOne,
	// 		timerTwo,
	// 		timerThree,
	// 		(one, two, three) => {
	// 			return `Timer One (Proj) Latest: ${one},
	// 			\nTimer Two (Proj) Latest: ${two},
	// 			\nTimer Three (Proj) Latest: ${three}
	// 			\n`;
	// 		}
	// 	);
	// // log values
	// const subscribe = combinedProject.subscribe(
	// 	latestValuesProject => console.log(latestValuesProject)
	// );
};
