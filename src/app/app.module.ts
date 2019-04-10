import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './mydemo/master.component';
import { LeftChildComponent } from './mydemo/left-child.component';
import { RightChildComponent } from './mydemo/right-child.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    LeftChildComponent,
    RightChildComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
