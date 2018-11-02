import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorHandlerModule } from 'src/error-handler/error-handler.module';
import { GlobalErrorHandler } from 'src/error-handler/global-error.handler';
import { HttpErrorResolver } from './error-resolvers/http-error.resolver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ErrorHandlerModule.forRoot([
      { name: 'http', resolver: HttpErrorResolver }
    ]),
  ],
  providers: [
    HttpErrorResolver,
    { provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
