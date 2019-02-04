import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TikerComponent } from './tiker/tiker.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MarketComponent } from './market/market.component';
import { CryptoComponent } from './crypto/crypto.component';
import { MarcheeComponent } from './marchee/marchee.component';
import { WatchlisteComponent } from './watchliste/watchliste.component';
import { PortfeuilleComponent } from './portfeuille/portfeuille.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptoAPIService } from './crypto-api.service';
import { MatTableModule } from '@angular/material';
import { CointableComponent } from './cointable/cointable.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogOverviewExample, DialogOverviewExampleDialog } from './portfeuille/dialog-overview-example/dialog-overview-example';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material';
import { MatRippleModule, MatDatepickerModule } from '@angular/material';
import { MatMenuModule, MatNativeDateModule } from '@angular/material';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { MatTabsModule } from '@angular/material/tabs';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    TikerComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    MarketComponent,
    CryptoComponent,
    MarcheeComponent,
    CointableComponent,
    WatchlisteComponent,
    PortfeuilleComponent,
    FooterComponent,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
    CoinDetailComponent
  ],
  entryComponents: [DialogOverviewExample,
    DialogOverviewExampleDialog],
  imports: [MatIconModule, MatMenuModule, AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule,
    ReactiveFormsModule, MatNativeDateModule,
    MatGridListModule,
    MatDialogModule,
    MatCheckboxModule, MatTabsModule,
    MatRadioModule,
    MatDatepickerModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatRippleModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatToolbarModule
  ],
  providers: [CryptoAPIService, AuthService, AngularFireAuth,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
