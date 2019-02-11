import { Component, OnInit,Inject, forwardRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CryptoAPIService } from '../crypto-api.service';
import {Crypto} from '../models/cryptoModele';
import {FormBuilder, FormGroup, Validators, NG_VALUE_ACCESSOR} from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';



export interface DialogData {
  
}


@Component({
  selector: 'app-portfeuille',
  templateUrl: './portfeuille.component.html',
  styleUrls: ['./portfeuille.component.css'],
  
})


 

export class PortfeuilleComponent implements OnInit {
  buyForm: FormGroup;
  interval: any;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  profilRef: AngularFireList<any>;
  profil: Observable<any[]>;
  authState: any;
  totalCost:any;
  prof_loss:any;
  uid: string;
  result;
  coin:string;
  amount:string;
  Buy_Price:string;
  Currency:string;
  Bought:string;

  
  transaction = {coin: '', amount: '', Buy_Price: '', Currency: '',Bought:'',uid:""};
   
  constructor(
    public dialog: MatDialog,
    public CryptoService: CryptoAPIService,
    private fb: FormBuilder,db: AngularFireDatabase) { 
       this.profilRef = db.list('boughtcoin');
    
      this.profil = this.profilRef.snapshotChanges().pipe(
        map((changes: any) =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ); 



    this.itemsRef = db.list('boughtcoin');
    
    this.items = this.itemsRef.snapshotChanges().pipe(
      map((changes: any) =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
   
  }
 

  refreshData(){
    this.prof_loss=0;
    this.CryptoService.getCrypto().subscribe(res => {
      this.result=res.Data; 
    
      
      
      this.result.forEach(resapi => {
          this.items.subscribe(items=>{
          items.forEach(element => {
         
            if (resapi.CoinInfo.Name == element.coin) {
              this.prof_loss+=((resapi.RAW.USD.PRICE)*parseInt(element.amount))-(parseInt(element.Buy_Price)*parseInt(element.amount));
            }
        
      });
    });
      }) 
      
      
      })  
     
    

   }
    
   ngAfterViewInit(){
  
    this.interval = setInterval(() => { 
     this.refreshData(); 
  }, 10000);
  
  
   } 

    

    ngOnInit() {
     this.totalCost=0;
      this.refreshData();
  
      this.updatecost();
     
  }
 

      updatecost(){
        this.totalCost=0; 
       // cost=0;
        this.profil.subscribe(prof=>{
          prof.forEach(el => {
           
            this.totalCost+=parseInt(el.Buy_Price)*parseInt(el.amount); 
           
          });
        
         // this.totalCost=cost; 
   
       });
       
      }
      openDialog(): void {
        const dialogRef = this.dialog.open(PortfeuilleComponentDialog, {
          width: '600px',
         // height: '400px',
          data: {coin: this.coin, amount: this.amount,Buy_Price:this.Buy_Price,Currency:this.Currency,Bought:this.Bought,uid:""}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.transaction= result;
          console.log(this.transaction);
          this.itemsRef.push(this.transaction);
          this.totalCost=0; 
          this.prof_loss=0;
        // this.updatecost();
         
        });
      }
      sellcoin(): void {
        const dialogRef = this.dialog.open(sellcoinDialog, {
          width: '600px',
         // height: '400px',
          data: {coin: this.coin, amount: this.amount,Buy_Price:this.Buy_Price,Currency:this.Currency,Bought:this.Bought,uid:""}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.transaction= result;
          console.log(this.transaction);
          this.itemsRef.push(this.transaction);
          this.totalCost=0; 
          this.prof_loss=0;
        // this.updatecost();
         
        });
      }
      

}

@Component({
  selector: 'app-portfeuille',
  templateUrl: 'portfeuilledialog.html',
})
export class PortfeuilleComponentDialog {
 
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  authState: any;
  uid: string;
  result;
  

  transaction = {coin: '', amount: '', Buy_Price: '', Currency: '',Bought:'',uid:''};

  constructor(
    
    public dialogRef: MatDialogRef<PortfeuilleComponentDialog>,





    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    
      public dialog: MatDialog,
    public CryptoService: CryptoAPIService,
    db: AngularFireDatabase) { 
    this.itemsRef = db.list('boughtcoin');
    
    this.items = this.itemsRef.snapshotChanges().pipe(
      map((changes: any) =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-portfeuille',
  templateUrl: 'sellcoin.html',
})
export class sellcoinDialog {
 
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  authState: any;
  uid: string;
  result;
  

  transaction = {coin: '', amount: '', Buy_Price: '', Currency: '',Bought:'',uid:''};

  constructor(
    
    public dialogRef: MatDialogRef<sellcoinDialog>,





    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    
      public dialog: MatDialog,
    public CryptoService: CryptoAPIService,
    db: AngularFireDatabase) { 
    this.itemsRef = db.list('boughtcoin');
    
    this.items = this.itemsRef.snapshotChanges().pipe(
      map((changes: any) =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
