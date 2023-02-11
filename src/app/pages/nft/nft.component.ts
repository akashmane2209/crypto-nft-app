import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NFT } from 'src/app/components/common/nft-card/nft-card.component';
import * as NFTS from 'src/app/data/nfts.json';
import { Location } from '@angular/common';
interface Nft {

}
@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.less']
})
export class NftComponent implements OnInit {
  NFTS_DATA = Array.from(NFTS);
  nft: NFT;
  public notFound = false;
  constructor(private route: ActivatedRoute, private location: Location) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const nft_id = +params.get('nft_id')!;
      this.nft = this.NFTS_DATA.find(c => c.id === nft_id) as NFT;
      if(!this.nft) {
        this.notFound = true;
        return;
      }
    });
  }

  ngOnInit(): void {
  }

  public goBack() {
    this.location.back();
  }

}
