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
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';




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
    FooterComponent
  ],
  imports: [MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatToolbarModule
  ],
  providers: [CryptoAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
