import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { AppService } from "./services/app-service.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, HttpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
   providers: [ AppService ]
})
export class AppModule { }
