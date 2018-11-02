import { Injectable, Injector, Inject } from "@angular/core";
import { ErrorModel } from "../models/error.model";
import { ErrorResolver, Resolver, ErrorResolvers } from "../models/error-config.model";
import { GeneralErrorResolver } from "./general-error.resolver";
import { HttpErrorResolver } from "./http-error.resolver";

@Injectable({ providedIn: "root"})
export class ErrorResolverService {
    errorResolvers: ErrorResolver[];

    constructor(@Inject(ErrorResolvers) private resolvers: ErrorResolver[], 
        private httpErrorResolver: HttpErrorResolver,
        private generalResolver: GeneralErrorResolver, 
        private injector: Injector) {

            this.errorResolvers = [
                ...resolvers,
                { name: 'HttpErrorResolver', resolver: HttpErrorResolver },
                { name: 'GeneralErrorResolver', resolver: GeneralErrorResolver },
            ]

    }
    public resolveError(error: any): ErrorModel {
        let errorModel: ErrorModel;
        this.errorResolvers.forEach(t=> {
            if (errorModel == null) {
                errorModel = this.resolve(t, error);
            }
        });
        return errorModel;
    }

    private resolve(errorResolver: ErrorResolver, error: any) {
        let resolver: Resolver = this.injector.get(errorResolver.resolver);
        if (resolver.canResolve(error)) {
            return resolver.resolveError(error);
        }
        return null;
    }
}
