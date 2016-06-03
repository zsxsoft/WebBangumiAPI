"use strict";
const API = require('./api/API');
const Utils = require('./utils');
module.exports = {
    set API(apiServer) {
        API.API.Index = apiServer;
    },
    set fetch(fetchObj) {
        Utils.fetch = fetchObj;
    }
};
