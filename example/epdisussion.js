'use strict';
require('./node-global');
var Login = require('./login');
var EpDiscussion = require('../API/Anime/EpDiscussion').default;
var callback = null;

Login.then(() => {
	// 響け！ユーフォニアム
	// ep.8 おまつりトライアングル
    return EpDiscussion.request("513161");
}).then(d => console.log(d)).catch(d => console.log(d));
