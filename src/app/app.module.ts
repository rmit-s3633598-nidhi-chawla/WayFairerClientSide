import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { appRouterModule } from "./app.routes";

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
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
