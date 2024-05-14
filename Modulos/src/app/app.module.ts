import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesarrolloModule,  } from './desarrollo/desarrollo.module';
import { DatosModule } from './datos/datos.module';







@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesarrolloModule,
    DatosModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
