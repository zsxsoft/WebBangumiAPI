"use strict";
const API = require('./api/API');
module.exports = {
    set API(apiServer) {
        API.API.Index = apiServer;
    },
    set fetch(fetchObj) {
        global.fetch = fetchObj;
    }
};
