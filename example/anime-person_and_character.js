'use strict';
require('./node-global');
var Person = require('../API/Anime/Person').default;
var Character = require('../API/Anime/Character').default;

var callback = null;

// 白箱
Person.request("110467").then(d => console.log((d))).catch(d => console.log(d));
Character.request("110467").then(d => console.log(d)).catch(d => console.log(d));