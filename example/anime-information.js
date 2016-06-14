'use strict';
require('./node-global');
var Login = require('./login');
var Information = require('../API/Anime/Information').default;
var callback = null;

Login.then(() => {
    // Rewrite
    return Information.request("147568");
}).then(d => console.log(JSON.stringify(d))).catch(d => console.log(d));