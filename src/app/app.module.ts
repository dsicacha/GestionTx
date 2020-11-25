import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { FormOrigenComponent } from './form-origen/form-origen.component';
import { FormTxComponent } from './form-tx/form-tx.component';
import { FormDestinoComponent } from './form-destino/form-destino.component'



@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    FormOrigenComponent,
    FormTxComponent,
    FormDestinoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
