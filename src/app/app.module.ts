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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CointableComponent } from './cointable/cointable.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field'
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


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
    WatchlisteComponent,
    PortfeuilleComponent,
    FooterComponent,
    CointableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    HttpModule,
    MatFormFieldModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
