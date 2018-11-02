import { Injectable } from "@angular/core";
import { Resolver } from "src/error-handler/models/error-config.model";
import { ErrorModel } from "src/error-handler/models/error.model";

@Injectable({ providedIn: "root"})
export class HttpErrorResolver implements Resolver {
    canResolve(error: any): boolean {
        return false;
    }    
    resolveError(error: any): ErrorModel {
        return null;
    }


}