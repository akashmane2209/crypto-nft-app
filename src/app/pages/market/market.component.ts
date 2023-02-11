import { isMobile } from './../../utils/helpers';
import { initializeSlider } from 'src/app/utils/slider';
import { CoinService, CoinHistory, TIME_PERIOD_KEY } from '../../services/coins.service';
import {
	Component,
	OnInit,
	AfterViewInit,
	OnChanges,
	SimpleChanges,
	OnDestroy,
} from '@angular/core';
import * as COINS from 'src/app/data/coins.json';
import { Coin } from 'src/app/components/common/coin/coin.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
	selector: 'app-market',
	templateUrl: './market.component.html',
	styleUrls: ['./market.component.less'],
})
export class MarketComponent implements OnDestroy {
	public coin: Coin;
	subscription: Subscription;
	public coinSymbol: string;
	public notFound = false;
	public change: number = 0;
	public price: number = 0;
	private fetched = new BehaviorSubject<boolean>(false);
	private sliderInitialized = false;
	fetched$ = this.fetched.asObservable();
	COINS_DATA = Array.from(COINS);
	public timePeriods = Object.keys(TIME_PERIOD_KEY);
	public selectedTimePeriod: keyof typeof TIME_PERIOD_KEY = this
		.timePeriods[0] as keyof typeof TIME_PERIOD_KEY;
	public coinHistory: CoinHistory[];
	public data: number[];
	public isLoading = false;
	public labels: number[];
	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private coinService: CoinService
	) {
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.notFound = false;
			this.coinSymbol = params.get('coin_id')!;
			this.coin = this.COINS_DATA.find((c) => c.symbol === this.coinSymbol) as Coin;
			if (!this.coin) {
				this.notFound = true;
				return;
			}
		});

		this.fetchCoinHistory();
	}

	ngOnInit(): void {
		this.subscription = this.fetched$.subscribe((fetched) => {
			this.isLoading = !fetched;
			if (fetched && !this.sliderInitialized) {
				if (!isMobile()) {
					setTimeout(() => {
						const slider = document.querySelector('.slider');
						initializeSlider(slider);
						this.sliderInitialized = true;
					}, 500);
				}
			}
		});
	}
	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
	public setTimePeriod(period: string) {
		this.selectedTimePeriod = period as keyof typeof TIME_PERIOD_KEY;
		this.fetchCoinHistory();
	}
	fetchCoinHistory() {
		this.fetched.next(false);
		this.coinService
			.getCoinHistory(this.coin.uuid, this.selectedTimePeriod)
			.subscribe((response) => {
				const { data } = response;
				this.coinHistory = data.history;
				this.change = +data.change;
				this.price = +data.history[0].price;
				this.data = this.coinHistory.map((c) => +c.price);
				this.labels = this.coinHistory.map((c) => c.timestamp);
        if(this.selectedTimePeriod === '15 m') {
          this.data = this.data.splice(0, 15)
          this.labels = this.labels.splice(0, 15)
        }
				this.fetched.next(true);
			});
	}
	public goBack() {
		this.location.back();
	}
}
