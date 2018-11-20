import { FormControl } from '@angular/forms';

declare var Url;

interface IUrlParseResult {
    protocol: 'http' | 'https';
    slashes: boolean;
    auth: string;
    username: string;
    password: string;
    host: string;  // with port number 
    hostname: string; // without port number 
    port: number; // port number
    pathname: string;
    query: any;
    hash: string; // # part
    href: string;
    origin: string;
}

export function buildUrlValidator(options?: {
    https?: boolean;
}) {

    const inputs = Object.assign({}, options);

    return function(control: FormControl) {
        const value = control.value;
        const results = new Url(value) as IUrlParseResult;

        if (!results.protocol || !results.host) {
            return {
                invalid: true
            };
        }

        if (inputs.https && results.protocol !== 'https') {
            return {
                invalid: true
            };
        }


        return null;
    };
}
