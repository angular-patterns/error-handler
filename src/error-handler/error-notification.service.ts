import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ErrorModel } from './models/error.model';
import { ErrorResolverService } from './resolvers/error-resolver.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorNotificationService {
  private _error: BehaviorSubject<ErrorModel>;
  public error$: Observable<ErrorModel>;
  constructor(private errorResolverService: ErrorResolverService) { 
    this._error = new BehaviorSubject<ErrorModel>(null);
    this.error$ = this._error.asObservable().pipe(filter(t=>t != null));
  }

  next(error: any) { 
    try {
      let err = this.errorResolverService.resolveError(error);
      this._error.next(err);
    }
    catch(e) {
      console.error(`ErrorResolverService.resolveError failed!`);
      this._error.next({
        message: error.message,
        stack: error.stack,
        groups: []
      })
    }
  }
}
