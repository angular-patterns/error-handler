import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorHandlerModule } from 'src/error-handler/error-handler.module';
import { GlobalErrorHandler } from 'src/error-handler/global-error.handler';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ErrorHandlerModule.forRoot([]),
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
