import { Component, OnInit } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition,
	// ...
} from '@angular/animations';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.less'],
	animations: [
		trigger('slideInFromBottom', [
			transition(':enter', [
				style({ transform: 'translateY(80%)' }),
				animate('1000ms ease-in-out', style({ transform: 'translateY(0%)' })),
			]),
		]),
		// animation triggers go here
		trigger('slideIFromTop', [
			transition(':enter', [
				style({ transform: 'translateY(-50%)' }),
				animate('500ms ease-in-out', style({ transform: 'translateY(0%)' })),
			]),
		]),
	],
})
export class HomeComponent implements OnInit {
	public activeCoinFilter = '';

	constructor() {}

	ngOnInit(): void {}
	public setCoinFilter(coin: string) {
		this.activeCoinFilter = coin;
		// const lastScroll = localStorage.getItem('last_scroll');
		// const content = document.querySelector('.content');
		// if (content) {
		// 	content.scrollTop = +lastScroll!;
		// }
	}
}
