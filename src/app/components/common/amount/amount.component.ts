import { CurrencyService } from '../../../services/currency.service';
import { Component, Input, OnInit } from '@angular/core';
import { SIZES } from './types';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.less']
})
export class AmountComponent implements OnInit {
  @Input()
  public amount: number = 0;
  @Input()
  public size: string = SIZES.LARGE;
  public formattedAmount: string = '';

  constructor(private currencyService: CurrencyService) {
   }

  ngOnInit(): void {
    this.formatAmount()
  }
  formatAmount() {
    console.log(this.amount)
    this.formattedAmount = this.currencyService.format(this.amount);
  }
}
