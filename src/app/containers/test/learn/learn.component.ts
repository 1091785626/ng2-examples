import {Component} from '@angular/core';
import { learnRxjs } from './rxjs/root';
import { learnReselect } from './reselect/root';
import { learnSources } from './sources/root';

@Component({
	selector: 'app-view-test-learn',
	templateUrl: './learn.html',
})
export class LearnComponent {
	constructor() {
		this.learnRxjs();
		this.learnReselect();
		this.learnSources();
	}
	learnRxjs() {
		// learnRxjs.withLatestFrom();
		// learnRxjs.combineLatest();
	}
	learnReselect() {
		// learnReselect.createSelector();
	}
	learnSources() {
		// learn reselect ,调用同一个选择器；
		// 官方有个案例，后来引入三个实例todos，再次转换的原因
		// 要理解官方的案列可以需要看 reselect和react-redux中的源码
		// 这里主要解释缓存机制的原因
		console.log(learnSources.reselectSelector());
		console.log(learnSources.reselectSelector());
		console.log(learnSources.reselectSelector());
	}
}
