import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, from } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  /* template: `
  <div *ngIf="afAuth.user | async as user; else showLogin">
    <h1>Hello {{ user.displayName }}!</h1>
    <button (click)="logout()">Logout</button>
  </div>
  <ng-template #showLogin>
    <p>Please login.</p>
    <button (click)="login()">Login with Google</button>
  </ng-template>
` */,
})

export class LoginComponent {
  loginForm: FormGroup;
  // tslint:disable-next-line:no-inferrable-types
  errorMessage: string = '';

  constructor(public authService: AuthService, public afAuth: AngularFireAuth, private router: Router, private fb: FormBuilder) {

    this.createForm();
    /*
        this.itemsRef = db.list('user');
        // Use snapshotChanges().map() to store the key
        this.items = this.itemsRef.snapshotChanges().pipe(
          map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          )
        ); */


  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  login() {
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  tryLogin(value) {
    console.log(value);

    this.authService.doLogin(value)
      .then(res => {
        console.log(true);
        //  this.router.navigate(['/user']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      });
  }
}
