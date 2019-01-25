import { Component, OnInit } from '@angular/core';
import { CryptoAPIService } from '../crypto-api.service';
@Component({
  selector: 'app-watchliste',
  templateUrl: './watchliste.component.html',
  styleUrls: ['./watchliste.component.css']
})
export class WatchlisteComponent implements OnInit {
  coinData; coin;

  constructor(public cryptoService: CryptoAPIService) { }

  ngOnInit() {
    this.getCrypto(this.coin);
  }

  public getCrypto(coin) {
    console.log(this.coin);
    /* this.cryptoService.getCrypto(this.coin).subscribe(result => {
       console.log ("test");
       this.coinData= result.json().Data;
       console.log(this.coinData);
 
     })
     */
  }




}
