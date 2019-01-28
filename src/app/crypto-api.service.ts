import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crypto } from '../app/models/cryptoModele';
@Injectable({
  providedIn: 'root'
})
export class CryptoAPIService {
  private cryptoUrl = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD' //'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR';

  constructor(private Http: HttpClient) { }

  getCrypto(): Observable<Crypto> {
    return this.Http.get<Crypto>(this.cryptoUrl);
    //return this.http.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD');
    //return this.http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms='+coin+'USD,EUR&api_key='+'55447dcf063b6c88eed9387897a338c5699a77ea9a8c2c6d7fe00401046de288' );
    // return this.http.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym='+coin+'&tsyms=USD&ts=1452680400&api_key='+'55447dcf063b6c88eed9387897a338c5699a77ea9a8c2c6d7fe00401046de288' );
  }


}
