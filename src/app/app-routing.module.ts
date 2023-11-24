import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { VendordisplayComponent } from './vendordisplay/vendordisplay.component';
import { VendorComponent } from './vendor/vendor.component';
import { ClientComponent } from './client/client.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent  },
  {path:'landingpage',component:LandingpageComponent},
  { path: 'vendordisplay', component: VendordisplayComponent },
  { path: 'client', component: ClientComponent },
  { path: 'manu', component: ManufacturerComponent },
  {path:'vendor',component:VendorComponent}
  // { path: '', redirectTo: 'login', pathMatch: 'full',component:LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
