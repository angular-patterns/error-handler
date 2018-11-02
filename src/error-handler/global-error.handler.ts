import { ErrorHandler, Injector, Injectable, NgZone } from "@angular/core";
import { ErrorNotificationService } from "./error-notification.service";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root"})
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) {
        
    }
    handleError(error) {
        console.error(error);
        const router = this.injector.get(Router);
        if (router.url === '/error') {
            return;
        }

        const notificationService = this.injector.get(ErrorNotificationService);
        notificationService.next(error);
        this.injector.get(NgZone).run(t=> {
            setTimeout(t=> {
                router.navigate(['./error']);
            });
          }); 
        
    }
}