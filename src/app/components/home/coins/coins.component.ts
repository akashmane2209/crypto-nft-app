import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as COINS from 'src/app/data/coins.json';
import { Coin } from '../../common/coin/coin.component';
@Component({
	selector: 'app-coins',
	templateUrl: './coins.component.html',
	styleUrls: ['./coins.component.less'],
})
export class CoinsComponent implements OnInit {
  @Output() updateCoinFilter = new EventEmitter<string>()
	public COINS_DATA = Array.from(COINS);
  public isFilterCoinSet = false;
  public activeCoin = '';
  public filterCoin = '';
	middleIndex = Math.ceil(this.COINS_DATA.length / 2);
	public firstHalf = this.COINS_DATA.splice(0, this.middleIndex);
	public secondHalf = this.COINS_DATA.splice(-this.middleIndex);
	constructor(private _router: Router) {
  }

	ngOnInit(): void {}
  public onMouseEnter(coinName: string) {
    this.activeCoin = coinName;
  }
  public onMouseLeave() {
    this.activeCoin = '';
  }

  public onCoinClick(coin: Coin) {
    const coinName = coin.name;
    this.activeCoin = '';
    if(coinName === this.filterCoin && this.isFilterCoinSet)  {
      this.isFilterCoinSet = false;
      this.filterCoin = '';
      this.updateCoinFilter.emit(this.filterCoin);
    } else {
      this.isFilterCoinSet = true;
      this.filterCoin = coinName;
      this.updateCoinFilter.emit(this.filterCoin);
    }
    this._router.navigate(['market',coin.symbol])
  }
}
