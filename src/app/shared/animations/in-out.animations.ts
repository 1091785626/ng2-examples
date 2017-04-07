import { trigger, state, style, transition, animate } from '@angular/animations';
export const inOut = trigger('inOut', [
	state('flyRight, flyLeft', style({opacity: 1, transform: 'translateX(0)'})),
	state('fade', style({opacity: 1})),
	state('slideDown, slideUp', style({opacity: 1, transform: 'translateY(0)'})),
	transition('void => flyRight', [
		style({
			opacity: 0,
			transform: 'translateX(100%)'
		}),
		animate('0.2s ease-in')
	]),
	transition('flyRight => void', [
		animate('0.2s 10ms ease-out', style({
			opacity: 0,
			transform: 'translateX(100%)'
		}))
	]),
	transition('void => flyLeft', [
		style({
			opacity: 0,
			transform: 'translateX(-100%)'
		}),
		animate('0.2s ease-in')
	]),
	transition('flyLeft => void', [
		animate('0.2s 10ms ease-out', style({
			opacity: 0,
			transform: 'translateX(-100%)'
		}))
	]),
	// 进场
	transition('void => fade', [
		style({
			opacity: 0,
		}),
		animate('0.3s ease-in')
	]),
	// 消失
	transition('fade => void', [
		animate('0.3s 10ms ease-out', style({
			opacity: 0,
		}))
	]),
	transition('void => slideDown', [
		style({
			opacity: 0,
			transform: 'translateY(-200%)'
		}),
		animate('0.3s ease-in')
	]),
	transition('slideDown => void', [
		animate('0.3s 10ms ease-out', style({
			opacity: 0,
			transform: 'translateY(-200%)'
		}))
	]),
	transition('void => slideUp', [
		style({
			opacity: 0,
			transform: 'translateY(200%)'
		}),
		animate('0.3s ease-in')
	]),
	transition('slideUp => void', [
		animate('0.3s 10ms ease-out', style({
			opacity: 0,
			transform: 'translateY(200%)'
		}))
	]),
]);
