import { Component, Input, OnInit } from '@angular/core';
export type NFT = {
	id: number;
	image: string;
	price: number;
	crypto: string;
	time_elapsed: number;
	name: string;
	artist: string;
};
@Component({
	selector: 'app-nft-card',
	templateUrl: './nft-card.component.html',
	styleUrls: ['./nft-card.component.less'],
})
export class NftCardComponent implements OnInit {
	@Input() public nft: NFT;

	constructor() {}

	ngOnInit(): void {}
}
