import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CryptoAPIService } from '../crypto-api.service';
import { Crypto } from '../models/cryptoModele';
import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';


/*const source = timer(1000, 20000);
 
 const subscribe = source.subscribe(val => console.log(val));*/

@Component({
  selector: 'app-cointable',
  templateUrl: './cointable.component.html',
  styleUrls: ['./cointable.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})


export class CointableComponent implements OnInit {
  interval: any;
  dataSource = new MatTableDataSource();
  displayedColumns = ['n', 'Name', 'Price', 'Direct', 'Total', 'MktCap', 'Chard', 'Chg'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isOpen = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor(public CryptoService: CryptoAPIService) {

  }

  // ngAfterViewInit(){
  /*  this.CryptoService= Observable
   .interval(1000)
   .startWith(0).switchMap(() => this.CryptoService.getCrypto()); */




  //}

  refreshData() {
    this.CryptoService.getCrypto().subscribe((data: any) => {

      this.dataSource = new MatTableDataSource(data.Data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate =
        (datas: Crypto, filters: string) => {
          return JSON.stringify(datas).indexOf(filters) != -1;
        }
    })
  }

  ngAfterViewInit() {
    this.interval = setInterval(() => {
      this.refreshData();
    }, 10000);

  }

  ngOnInit() {
    this.refreshData();
    let liens = document.body.querySelector("button");
    liens.addEventListener("change", () => {
      console.log('hello');
      liens.classList.add('class3');
    });

  }
  /*
  ngAfterViewInit() {
    this.CryptoService.getCrypto().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data.Data);
    }
  }*/

  applyFilter(filterValue: string) {
    const filters = filterValue.trim().toLowerCase();
    this.dataSource.filter = filters;
  }

}


/*liens.forEach(lien => {
  lien.addEventListener("click", () => {
    console.log('hello');
    this.target.classList.add('class3');
  });
});*/
