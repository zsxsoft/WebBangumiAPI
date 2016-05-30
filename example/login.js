'use strict';
require('./node-global');
var Login = require('../API/Login').default;
var callback = null;
module.exports = new Promise((resolve, reject) => {
    Login.request(Config.username, Config.password).then(d => {
        console.log("登录成功！");
        resolve();
    }).catch(e => {
        console.error("登录失败！");
        console.error(e);
        reject(e);
    });
});
