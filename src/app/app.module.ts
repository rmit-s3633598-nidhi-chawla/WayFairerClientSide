import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { appRouterModule } from "./app.routes";
import { LandingPageComponent } from './landingPage.component';


@NgModule({
  declarations: [
    AppComponent,
  appRouterModule.components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     appRouterModule.routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
