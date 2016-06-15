'use strict';
require('./node-global');
var Login = require('./login');
var Person = require('../API/Anime/Person').default;
var callback = null;

Login.then(() => {
    // 高橋李依
    return Person.request("17491");
}).then(d => console.log(d)).catch(d => console.log(d));