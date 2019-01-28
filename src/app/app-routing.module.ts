import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from '../app/login/login.component';
import{RegisterComponent} from '../app/register/register.component';
import {AppComponent} from '../app/app.component';
const routes: Routes = [
  { path:'', component:AppComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'coin/:id', component:RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
