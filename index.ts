import * as API from './api/API';
import * as Utils from './utils';
// I don't want to import node.d.ts, so I write this.
// this will not be compiled.
declare var module: Object;


(<any>module).exports = {
    set API(apiServer: string) {
        API.API.Index = apiServer;
    },
    set fetch(fetchObj: Object) {
        Utils.fetch = fetchObj;
    }
}
