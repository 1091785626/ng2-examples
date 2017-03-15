import { Observable } from 'rxjs/Rx';
// signature: concatAll(): Observable

// 用于 nestet Observalbe(observable of observables) ，当上一个 complete 的时候，subscribe 每个，然后合并（merge）每个 emit 的值
export const concatAll = () => {
	// 每隔2s emit 一个值
	const sourceOne = Observable.interval(2000);
	const example = sourceOne
		// 加10，并且返回一个 Observable
		.map(val => Observable.of(val + 10))
		// 合并从 inner Observable 返回的值
		.concatAll();

	// 输出：'Example with Basic Observable 10', `Example with Basic Observable 11'...
	const subscribe = example.subscribe(val => console.log('Exmaple with Basic Observable', val));
};
