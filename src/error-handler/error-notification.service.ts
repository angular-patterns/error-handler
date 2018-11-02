import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ErrorModel } from './models/error.model';
import { ErrorResolverService } from './resolvers/error-resolver.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorNotificationService {
  private lastError: any;
  private _error: BehaviorSubject<ErrorModel>;
  public error$: Observable<ErrorModel>;

  constructor(private errorResolverService: ErrorResolverService, private ngZone: NgZone, private router: Router) { 
    this._error = new BehaviorSubject<ErrorModel>(null);
    this.error$ = this._error.asObservable().pipe(filter(t=>t != null));
    this.lastError = null;
  }

  getLastError() {
    return this.lastError;
  }

  clearLastError() {
    this.lastError = null;
    this._error.next(null);
  }

  next(error: any) { 
    try {
      this.lastError = error;
      let err = this.errorResolverService.resolveError(error);
      this._error.next(err);
    }
    catch(e) {
      console.error(`ErrorResolverService resolveError failed! ${e.message}`);
      this._error.next({
        message: error.message,
        stack: error.stack,
        groups: []
      });
    }
  }
  safeNavigate(url: string){
    try {
      if (this.router.url !== url) {
        this.ngZone.run(t=> {
          setTimeout(t=> {
              this.router.navigate([url]);
          });
        });
      }
    }
    catch (e) {
      console.error(`ErrorResolverService navigate failed! ${e.message}`);
    }
  }
}
