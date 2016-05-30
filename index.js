"use strict";
const API = require('./api/API');
if (!global)
    var global = {}; // To let TypeScript Compiler know it's a variable.
if (!module)
    var module = {};
module.exports = {
    set API(apiServer) {
        API.API.Index = apiServer;
    },
    set fetch(fetchObj) {
        global.fetch = fetchObj;
    }
};
