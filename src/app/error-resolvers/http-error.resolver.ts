import { Injectable } from "@angular/core";
import { Resolver } from "src/error-handler/models/error-config.model";
import { ErrorModel, ErrorGroup } from "src/error-handler/models/error.model";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({ providedIn: "root"})
export class HttpErrorResolver implements Resolver {
    canResolve(error: any): boolean {
        console.log(error);
        return error instanceof HttpErrorResponse;
    }    
    resolveError(error: any): ErrorModel {
        return {
            message: error.message,
            stack: '',
            html: error.error,
            groups: [{ 
                category: 'HTTP properties',
                properties: [
                    { key: 'Name', value: error.name },
                    { key: 'Ok', value: error.ok },
                    { key: 'Status', value: error.status },
                    { key: 'Status Text', value: error.statusText },
                    { key: 'URL', value: error.url },
                ]
            }]
        }
    }


}