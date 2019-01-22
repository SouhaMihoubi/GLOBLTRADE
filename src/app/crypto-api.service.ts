import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CryptoAPIService {
  constructor(public http:Http) { }
 
  getCrypto(coin:string) {
    
    return this.http.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD');
    //return this.http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms='+coin+'USD,EUR&api_key='+'55447dcf063b6c88eed9387897a338c5699a77ea9a8c2c6d7fe00401046de288' );
   // return this.http.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym='+coin+'&tsyms=USD&ts=1452680400&api_key='+'55447dcf063b6c88eed9387897a338c5699a77ea9a8c2c6d7fe00401046de288' );
}

}
