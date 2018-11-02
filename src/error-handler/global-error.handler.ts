import { ErrorHandler, Injector, Injectable } from "@angular/core";
import { ErrorNotificationService } from "./error-notification.service";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root"})
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) {
        
    }
    handleError(error) {
        const notificationService = this.injector.get(ErrorNotificationService);
        notificationService.next(error);

        const router = this.injector.get(Router);
        router.navigate(['error']);
    }
}