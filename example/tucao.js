'use strict';
require('./node-global');
var Login = require('./login');
var Tucao = require('../API/Anime/Tucao').default;
var callback = null;

Login.then(() => {
    // Re:ゼロから始める異世界生活
    return Tucao.request("140001", "3");
}).then(d => console.log(d)).catch(d => console.log(d)); 