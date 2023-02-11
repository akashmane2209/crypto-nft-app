import {
	trigger,
	transition,
	style,
	query,
	animateChild,
	group,
	animate,
} from '@angular/animations';
export const routeTransitionAnimations = trigger('triggerName', [
	transition('One => Two', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
			}),
		]),
		query(':enter', [style({ transform: 'translateX(100%)' })]),
		group([query(':enter', [animate('.5s  ease-out', style({ transform: 'translateX(0)' }))])]),
	]),
	transition('Two => One', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
			}),
		]),
		query(':leave', [style({ transform: 'translateX(0%)', 'z-index': 1  })]),
    query(':enter', [style({ 'z-index': 0  })]),
		group([query(':leave', [animate('.5s  ease-out', style({ transform: 'translateX(100%)' }))])]),
	]),
  transition('One => Three', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
			}),
		]),
		query(':enter', [style({ transform: 'translateX(100%)' })]),
		group([query(':enter', [animate('.5s  ease-out', style({ transform: 'translateX(0)' }))])]),
	]),
	transition('Three => One', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
			}),
		]),
		query(':leave', [style({ transform: 'translateX(0%)', 'z-index': 1  })]),
    query(':enter', [style({ 'z-index': 0  })]),
		group([query(':leave', [animate('.5s  ease-out', style({ transform: 'translateX(100%)' }))])]),
	]),
]);
