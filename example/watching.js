'use strict';
require('./node-global');
var Login = require('./login');
var WatchingList = require('../API/WatchingList').default;
var Watched = require('../API/Anime/Watched').default;
var callback = null;

Login.then(() => {
	// 获取正在观看列表
    return WatchingList.request();
}).then(d => {
    console.log(d);
    /**
     * 如果你观看的列表里有《迷家》的话，把【已观看】设置到第9集。
     */
    let watchingList = d.watching.filter(obj => /迷家/.test(obj.name));
    if (watchingList.length === 0) return null;
    let watching = watchingList[0];
    let epId = watching.ep.filter(ep => parseInt(ep.episode) <= 9).map(ep => ep.id);
    return Watched.request(epId, d.gh);
}).then(d => console.log(d)).catch(d => console.log(d));
