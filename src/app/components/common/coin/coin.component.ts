import { Component, Input, OnInit } from '@angular/core';
export type Coin = {
  name: string;
  symbol: string;
  uuid: string;
}
@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.less']
})
export class CoinComponent implements OnInit {
  @Input()
  public coin : Coin;
  @Input()
  public activeCoin: string;
  @Input()
  public filterCoin: string;
  constructor() { }

  ngOnInit(): void {
  }

}
