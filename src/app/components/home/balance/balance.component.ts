import { SIZES } from '../../common/amount/types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.less']
})
export class BalanceComponent implements OnInit {
  public balance_amount = 1234.56;
  public size = SIZES.XLARGE;
  constructor() { }

  ngOnInit(): void {
  }

}
