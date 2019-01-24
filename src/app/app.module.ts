import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TikerComponent } from './tiker/tiker.component';
import { NavComponent } from './nav/nav.component';
import { MatRippleModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MarketComponent } from './market/market.component';
import { CryptoComponent } from './crypto/crypto.component';
import { MarcheeComponent } from './marchee/marchee.component';
import { WatchlisteComponent } from './watchliste/watchliste.component';
import { PortfeuilleComponent } from './portfeuille/portfeuille.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } 
from '@angular/material';
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule   } from '@angular/material';
import { MaterialModule } from "@angular/material";


import { DialogOverviewExample } from './portfeuille/dialog-overview-example/dialog-overview-example';
import { DialogOverviewExampleDialog } from './portfeuille/dialog-overview-example/dialog-overview-example';
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
    DialogOverviewExampleDialog ,
    DialogOverviewExample
  ],
  entryComponents:[DialogOverviewExample,
    DialogOverviewExampleDialog ,

  ],
  imports: [
    MatSortModule,
    MatRippleModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MaterialModule,
    FormsModule,
    MatDialogModule, 
    MatIconModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
   
    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
