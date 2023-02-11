import { NgModule } from '@angular/core';
import { AmountComponent } from './common/amount/amount.component';
import { ButtonComponent } from './common/button/button.component';
import { BalanceComponent } from './home/balance/balance.component';
import { CommonModule } from '@angular/common';
import { CoinsComponent } from './home/coins/coins.component';
import { CoinComponent } from './common/coin/coin.component';
import { NftsComponent } from './home/nfts/nfts.component';
import { NftCardComponent } from './common/nft-card/nft-card.component';
import { CdTimerModule } from 'angular-cd-timer';
import { CryptoChartComponent } from './market/crypto-chart/crypto-chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [CommonModule, CdTimerModule, NgChartsModule],
  declarations: [
    AmountComponent,
    ButtonComponent,
    BalanceComponent,
    CoinsComponent,
    CoinComponent,
    NftsComponent,
    NftCardComponent,
    CryptoChartComponent,
  ],
  exports: [
    AmountComponent,
    ButtonComponent,
    BalanceComponent,
    CoinsComponent,
    NftsComponent,
    ButtonComponent,
    CryptoChartComponent
  ],
})
export class ComponentsModule { }
