import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {AngularFontAwesomeModule} from 'angular-font-awesome'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { SCalculatorComponent } from './scalculator/scalculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductEntryComponent,
    SCalculatorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    BsDropdownModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
