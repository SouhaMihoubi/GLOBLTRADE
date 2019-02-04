import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crypto } from '../app/models/cryptoModele';
@Injectable({
  providedIn: 'root'

})
export class CryptoAPIService {
 
  private cryptoUrl = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD' ;

  private detailUrl = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD';

  private detaile = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=';
  
  constructor(private Http: HttpClient) { }

  getCrypto(): Observable<Crypto> {
    return this.Http.get<Crypto>(this.cryptoUrl);
    
  }

  coinDetail(): Observable<Crypto> {

    return this.Http.get<Crypto>(this.detailUrl);

  }

  detail(id): Observable<Crypto> {

    return this.Http.get<Crypto>(this.detaile + id +'&tsyms=USD');

  }
}

