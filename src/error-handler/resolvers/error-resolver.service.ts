import { Injectable, Injector, Inject } from "@angular/core";
import { ErrorModel } from "../models/error.model";
import { ErrorResolver, Resolver, ErrorResolvers } from "../models/error-config.model";
import { GeneralErrorResolver } from "./general-error.resolver";

@Injectable({ providedIn: "root"})
export class ErrorResolverService {
    constructor(@Inject(ErrorResolvers) private resolvers: ErrorResolver[], 
        private generalResolver: GeneralErrorResolver, private injector: Injector) {

    }
    public resolveError(error: any): ErrorModel {
        let errorModel: ErrorModel;
        this.resolvers.forEach(t=> {
            if (errorModel == null) {
                errorModel = this.resolve(t, error);
            }
        });
        if (errorModel == null) {
           errorModel = this.generalResolver.resolveError(error);
        }
        return errorModel;
    }

    private resolve(errorResolver: any, error: any) {
        let resolver: Resolver = this.injector.get(errorResolver);
        if (resolver.canResolve(error)) {
            return resolver.resolveError(error);
        }
        return null;
    }
}