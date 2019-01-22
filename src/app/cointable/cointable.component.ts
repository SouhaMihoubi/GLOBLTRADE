import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CointableDataSource } from './cointable-datasource';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatTableDataSource} from '@angular/material';
import { CryptoAPIService } from '../crypto-api.service';

@Component({
  selector: 'app-cointable',
  templateUrl: './cointable.component.html',
  styleUrls: ['./cointable.component.css']
})
export class CointableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['position', 'coin', 'price', 'directvol','totalvol','marketcap','chg_24'];
coinData;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  constructor(public cryptoService: CryptoAPIService) {

   }

  ngOnInit() {
    this.cryptoService.getCrypto("f").subscribe(data=>{
      this.coinData= data.json();
      this.dataSource = new MatTableDataSource(this.coinData);
      



    })
   // this.dataSource = new CointableDataSource(this.paginator, this.sort);
  }

  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
