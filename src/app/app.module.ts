import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ClientComponent } from './client/client.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { LoginComponent } from './login/login.component';
import { DiamondComponent } from './diamond/diamond.component';
import { GoldComponent } from './gold/gold.component';
import { VendorComponent } from './vendor/vendor.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { VendordisplayComponent } from './vendordisplay/vendordisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    ClientComponent,
    ManufacturerComponent,
    LoginComponent,
    DiamondComponent,
    GoldComponent,
    VendorComponent,
    VendordisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
