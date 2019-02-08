import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CryptoAPIService } from '../crypto-api.service';
import { Crypto } from '../models/cryptoModele';
import { FormBuilder, FormGroup, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AngularFireDatabase, AngularFireList, listChanges } from '@angular/fire/database';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';
import { connect } from 'net';



@Component({
  selector: 'app-portfeuille',
  templateUrl: './portfeuille.component.html',
  styleUrls: ['./portfeuille.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => PortfeuilleComponent),
    }
  ]
})
export class PortfeuilleComponent implements OnInit {
  buyForm: FormGroup;
  interval: any;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  authState: any;
  totalCost: any;
  prof_loss: any;
  uid: string;
  lists = [];


  result;
  displayedColumns: string[] = ['Name', 'buy', 'amount', 'Price', 'value', 'profil', 'change'];
  transaction = { coin: '', amount: '', Buy_Price: '', Currency: '', Bought: '' };
  dataSource = new MatTableDataSource();
  constructor(public CryptoService: CryptoAPIService, private fb: FormBuilder, db: AngularFireDatabase) {
    this.itemsRef = db.list('boughtcoin');

    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(
      map((changes: any) =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

  }

  refreshData() {
    let connected = JSON.parse(localStorage.getItem("connected"));

    this.CryptoService.getCrypto().subscribe(res => {
      this.result = res.Data;

      this.totalCost = 0;
      this.prof_loss = 0,

        /* this.result.forEach(resapi => {
          this.prof_loss+=(resapi.DISPLAY.USD.PRICE)*parseInt(element.amount)-this.totalCost;
          
        }) */


        this.items.subscribe(items => {
          items.forEach(element => {
            console.log(element.uid);

            if (connected.uid === element.uid) {
              this.lists.push(element);

              this.totalCost += parseInt(element.Buy_Price) * parseInt(element.amount);

            }

          });


        });
      //console.log(this.result);
      console.log(this.lists);

    })



    /*  refreshData(){
        this.CryptoService.getCrypto().subscribe((data: any) => {
         
          this.dataSource = new MatTableDataSource(data.Data);
         
      }) */
  }

  ngAfterViewInit() {

    this.interval = setInterval(() => {
      this.refreshData();
      this.lists = [];
    }, 10000);


  }



  createForm(): any {
    this.buyForm = this.fb.group({
      coin: "",
      amount: "",
      Buy_Price: "",
      Currency: "",
      Bought: "",

      /*  coin: ['', Validators.required],
       amount: ['', Validators.required],
       Buy_Price: ['', Validators.required],
       Currency: ['', Validators.required],
       Bought: ['', Validators.required] */
    });
  }
  ngOnInit() {
    this.totalCost = 0;
    this.refreshData();
    this.createForm();
    this.updatecost();

  }
  addTransaction(buyForm) {
    let connected = JSON.parse(localStorage.getItem("connected"));

    const transaction = {
      uid: connected.uid,
      coin: buyForm.coin,
      amount: buyForm.amount,
      Buy_Price: buyForm.Buy_Price,
      Currency: buyForm.Currency,
      Bought: buyForm.Bought,

    };

    this.itemsRef.push(transaction);
    console.log(transaction);
    this.updatecost();

  }

  updatecost() {

  }

}


