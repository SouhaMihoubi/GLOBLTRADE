import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CointableDataSource } from './cointable-datasource';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material';
import { CryptoAPIService } from '../crypto-api.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

import { Crypto } from '../models/cryptoModele';
@Component({
  selector: 'app-cointable',
  templateUrl: './cointable.component.html',
  styleUrls: ['./cointable.component.css']
})


export class CointableComponent implements OnInit {
  dataSource = new CryptoDataSource(this.CryptoService);
  displayedColumns = ['Id'];
  // coinData;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  constructor(private CryptoService: CryptoAPIService) {

  }



  ngOnInit() {
    /*this.cryptoService.getCrypto("f").subscribe(data => {
      this.coinData = data.json();
      this.dataSource = new MatTableDataSource(this.coinData);




    })
    // this.dataSource = new CointableDataSource(this.paginator, this.sort);

    */
  }
}

export class CryptoDataSource extends DataSource<any> {
  constructor(private CryptoService: CryptoAPIService) {
    super();
  }
  connect(): Observable<Crypto[]> {
    return this.CryptoService.getCrypto();
  }
  disconnect() { }
}
