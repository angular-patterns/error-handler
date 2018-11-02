export class ErrorModel {
    message: string;
    stack: string;
    groups: ErrorGroup[];
}

export class ErrorGroup {
    category: string;
    properties: ErrorProperty[];
}

export class ErrorProperty {
    key: string;
    value: string;
}
