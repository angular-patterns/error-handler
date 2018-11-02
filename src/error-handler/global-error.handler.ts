import { ErrorHandler, Injector, Injectable } from "@angular/core";
import { ErrorNotificationService } from "./error-notification.service";

@Injectable({ providedIn: "root"})
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) {
        
    }
    handleError(error) {
        const notificationService = this.injector.get(ErrorNotificationService);
        notificationService.next(error);

    }
}