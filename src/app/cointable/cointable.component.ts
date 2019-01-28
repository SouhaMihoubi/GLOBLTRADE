import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
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
  dataSource = new MatTableDataSource();
  displayedColumns = ['Name', 'Price', 'Direct', 'Total', 'MktCap', 'Chg'];
  coinData: any;

  // coinData;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  constructor(public CryptoService: CryptoAPIService) {
    // console.log(this.CryptoService);

  }



  ngOnInit() {
    this.CryptoService.getCrypto().subscribe((data: any) => {
      //this.coinData = this.data.json().USD;
      this.dataSource = new MatTableDataSource(data.Data);


      this.dataSource.filterPredicate =
        (data: Crypto, filter: string) => this.dataSource.data.indexOf(filter) != -1;

      //console.log(data.Data[0].CoinInfo.Id);


    })
    // this.dataSource = new CointableDataSource(this.paginator, this.sort);


  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;

  }
}


