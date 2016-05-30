import * as API from './api/API';
// I don't want to import node.d.ts, so I write this.
// this will not be compiled.
declare var global: Object;
declare var module: Object;


(<any>module).exports = {
    set API(apiServer: string) {
        API.API.Index = apiServer;
    },
    set fetch(fetchObj: Object) {
        (<any>global).fetch = fetchObj;
    }
}
