import { InjectionToken } from "@angular/core";
import { ErrorModel } from "./error.model";

export const ErrorResolvers = new InjectionToken<ErrorResolver[]>("Error Resolvers");
export class ErrorResolver {
    name: string;
    resolver: any;
}

export interface Resolver {
    canResolve(error: any): boolean;
    resolveError(error: any): ErrorModel;
}