import { Resolver } from "../models/error-config.model";
import { ErrorModel } from "../models/error.model";


export class GeneralErrorResolver implements Resolver {
    canResolve(error: any): boolean {
        return true;
    }
    resolveError(error: any): ErrorModel {
        return {
            message: error.message,
            stack: error.stack,
            groups: []
        }
    }


}