'use strict';
require('./node-global');
var Login = require('./login');
var TimelineNS = require('../API/API').Timeline;
var Timeline = require('../API/Timeline').default;
var callback = null;

Login.then(() => {
    return Timeline.request(TimelineNS.Type.Say)
}).then(d => console.log(d)).catch(d => console.log(d));
