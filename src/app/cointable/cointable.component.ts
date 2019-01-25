import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CryptoAPIService } from '../crypto-api.service';
import { filter } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import {Crypto} from '../models/cryptoModele';

@Component({
  selector: 'app-cointable',
  templateUrl: './cointable.component.html',
  styleUrls: ['./cointable.component.css']
})


export class CointableComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns = ['n','Name', 'Price', 'Direct', 'Total', 'MktCap', 'Chg'];
    
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
 
  constructor(public CryptoService: CryptoAPIService) {
  
  }



  ngOnInit() {
    this.CryptoService.getCrypto().subscribe((data: any) => {
      
      this.dataSource = new MatTableDataSource(data.Data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate =
       (datas: Crypto, filters: string) => {
       return  JSON.stringify(datas).indexOf(filters)!=-1;
    }
  })
}

  applyFilter(filterValue: string) {
    const filters = filterValue.trim().toLowerCase();
    this.dataSource.filter = filters;
  }

}


