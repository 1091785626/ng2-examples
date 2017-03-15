import { Component, OnInit } from '@angular/core';
import { learnRxjs } from './rxjs/root';
import { learnReselect } from './reselect/root';
import { learnSources } from './sources/root';

@Component({
	selector: 'app-view-test-learn',
	templateUrl: './learn.html',
})
export class LearnComponent implements OnInit {
	constructor() {}
	// 已经渲染dom结构
	ngOnInit() {
		this.learnRxjs();
		this.learnReselect();
		this.learnSources();
	}
	learnReselect() {
		// learnReselect.createSelector();
	}
	learnSources() {
		// learn reselect ,调用同一个选择器；
		// 官方有个案例，后来引入三个实例todos，再次转换的原因
		// 要理解官方的案列可以需要看 reselect和react-redux中的源码
		// 这里主要解释缓存机制的原因
		// console.log(learnSources.reselectSelector());
		// console.log(learnSources.reselectSelector());
		// console.log(learnSources.reselectSelector());
	}
	learnRxjs() {
		// learnRxjs.buffer();
		// learnRxjs.bufferCount();
		// learnRxjs.bufferTime();
		// learnRxjs.bufferToggle();
		// learnRxjs.bufferWhen();
		// learnRxjs.combineAll();
		// learnRxjs.combineLatest();
		// learnRxjs.concat();
		// learnRxjs.concatAll();
		// learnRxjs.concatMap();
		// learnRxjs.concatMapTo();
		// learnRxjs.count();
		// learnRxjs.debounce();
		// learnRxjs.debounceTime();
		// learnRxjs.defaultIfEmpty();
		// learnRxjs.delay();
		// learnRxjs.delayWhen();
		// learnRxjs.dematerialize();
		// learnRxjs.distinctUntilChanged();
		// learnRxjs.do();
		// learnRxjs.every();
		// learnRxjs.expand();
		// learnRxjs.filter();
		// learnRxjs.first();
		// learnRxjs.groupBy();
		// learnRxjs.ignoreElements();
		// learnRxjs.last();
		// learnRxjs.map();
		// learnRxjs.mapTo();
		// learnRxjs.merge();
		// learnRxjs.mergeMap();
		// learnRxjs.pluck();
		// learnRxjs.publish();
		// learnRxjs.race();
		// learnRxjs.repeat();
		// learnRxjs.retry();
		// learnRxjs.retryWhen();
		// learnRxjs.sample();
		// learnRxjs.scan();
		// learnRxjs.share();
		// learnRxjs.single();
		// learnRxjs.skip();
		// learnRxjs.skipUntil();
		// learnRxjs.skipWhile();
		// learnRxjs.startWith();
		// learnRxjs.switchMap();
		// learnRxjs.window();
		// learnRxjs.windowCount();
		// learnRxjs.windowTime();
		// learnRxjs.windowToggle();
		// learnRxjs.windowWhen();
		// learnRxjs.withLatestFrom();
		// learnRxjs.zip();
	}
}
