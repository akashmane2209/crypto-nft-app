import { Router } from '@angular/router';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as NFTS from 'src/app/data/nfts.json';
@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.less']
})
export class NftsComponent implements OnInit {
  @Input() public activeCoinFilter: string;
  public NFTS_DATA = Array.from(NFTS);
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const { activeCoinFilter } = changes;
    if(activeCoinFilter.currentValue !== activeCoinFilter.previousValue) {
      this.NFTS_DATA = Array.from(NFTS).filter(nft => {
        if(!this.activeCoinFilter) return true;
        return nft.crypto === this.activeCoinFilter;
      });
    }


  }
  public onNftClick(nftId: number) {
    const content = document.querySelector('.content')
    if(content) {
      localStorage.setItem('last_scroll', content.scrollTop.toString());
      content.scrollTop = 0;
      this._router.navigate(['nft', nftId])
    }
  }

}
