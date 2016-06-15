'use strict';
require('./node-global');
var Person = require('../API/Person').default;

Person.request("17491").then(d => console.log(d)).catch(d => console.log(d));