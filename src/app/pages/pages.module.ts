import { isMobile } from './../utils/helpers';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarketComponent } from './market/market.component';
import { NftComponent } from './nft/nft.component';
import { CdTimerModule } from 'angular-cd-timer';

const IS_MOBILE = isMobile();
const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		data: { animationState: IS_MOBILE ? '' : 'One' },
	},
	{
		path: 'market/:coin_id',
		component: MarketComponent,
		data: { animationState: IS_MOBILE ? '' : 'Two' },
	},
	{
		path: 'nft/:nft_id',
		component: NftComponent,
		data: { animationState: IS_MOBILE ? '' : 'Three' },
	},
];

@NgModule({
	declarations: [HomeComponent, MarketComponent, NftComponent],
	imports: [RouterModule.forChild(routes), ComponentsModule, CommonModule, CdTimerModule],
	exports: [RouterModule],
})
export class PageModule {}
