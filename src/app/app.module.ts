import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopUpComponent } from './top-up/top-up.component';
import { AppRoutingModule } from './app-routing.module';
import { PageStartingComponent } from './page-starting/page-starting.component';

@NgModule({
  declarations: [
    AppComponent,
    TopUpComponent,
    PageStartingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
