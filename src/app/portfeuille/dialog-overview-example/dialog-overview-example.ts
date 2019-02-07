import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA ,MatDialogConfig} from '@angular/material';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface DialogData {
  animal: string;
  name: string;
  buyForm:FormGroup;
  
  errorMessage: string ;
  // tslint:disable-next-line:no-inferrable-types
  successMessage: string ;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  authState: any;
  uid: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
  styleUrls: ['dialog-overview-example.css'],
})
export class DialogOverviewExample {

  animal: string;
  name: string;
  itemsRef: AngularFireList<{}>;
  items: any;
  buyForm: any;
  errorMessage: string;
  successMessage: string;
  

  constructor(public dialog: MatDialog, db: AngularFireDatabase,private fb:FormBuilder ) {
      this.createForm();
      this.itemsRef = db.list('boughtcoin');
      // Use snapshotChanges().map() to store the key
      this.items = this.itemsRef.snapshotChanges().pipe(
        map((changes: any) =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
    }
    createForm() {
      this.buyForm = this.fb.group({
      coin: ['', Validators.required],
        amount: ['', Validators.required],
        Buy_Price: ['', Validators.required],
        Currency: ['', Validators.required],
        Bought: ['', Validators.required]
      });
    }
  /*   addTransaction(value) {
      this.errorMessage = '';
      this.successMessage = 'Your account has been created';
          const transaction = {
            uid: '11',
            coin: value.coin,
            amount: value.amount,
            Buy_Price: value.Buy_Price,
            Currency: value.Currency,
            Bought: value.Bought,
  
          };
        console.log(value);
        
        this.itemsRef.push({NOM : "kl"});
  
        } */
 /*  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = "some data";
    let dialogRef = this.dialog.open(DialogOverviewExample, dialogConfig);
  } */

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '600px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
