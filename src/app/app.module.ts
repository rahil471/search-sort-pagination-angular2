import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SearchPipeModule //including into imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
