import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AngularWebStorageModule } from 'angular-web-storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularWebStorageModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
