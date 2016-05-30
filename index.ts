import * as API from './api/API';
if (!global) var global = {}; // To let TypeScript Compiler know it's a variable.
if (!module) var module = {};
(<any>module).exports = {
    set API(apiServer: string) {
        API.API.Index = apiServer;
    },
    set fetch(fetchObj: Object) {
        (<any>global).fetch = fetchObj;
    }
}
