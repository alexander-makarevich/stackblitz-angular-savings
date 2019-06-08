import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { SavingsComponent } from './savings/savings.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, SavingsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
