import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorModel } from "../models/error.model";
import { Resolver } from "../models/error-config.model";

@Injectable({ providedIn: "root"})
export class HttpErrorResolver implements Resolver {
    canResolve(error: any): boolean {
        return error instanceof HttpErrorResponse;
    }    
    resolveError(error: any): ErrorModel {
        return {
            message: error.message,
            stack: '',
            html: error.error,
            groups: [{ 
                category: 'Http Properties',
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