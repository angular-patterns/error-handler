import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorNotificationService } from './error-notification.service';
import { MessageComponent } from './message/message.component';
import { ErrorResolver, ErrorResolvers } from './models/error-config.model';
import { GeneralErrorResolver } from './resolvers/general-error.resolver';
import { ErrorResolverService } from './resolvers/error-resolver.service';
import { HttpErrorResolver } from './resolvers/http-error.resolver';

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageComponent
  ]
})
export class ErrorHandlerModule { 
  static forRoot(resolvers: ErrorResolver[]): ModuleWithProviders {
    return {
      ngModule: ErrorHandlerModule,
      providers: [
        ErrorNotificationService,
        ErrorResolverService,
        HttpErrorResolver,
        GeneralErrorResolver,
        { provide: ErrorResolvers, useValue: resolvers }
      ]
    }
  }
}
