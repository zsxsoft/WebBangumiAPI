'use strict';
require('./node-global');
var EpDiscussion = require('../API/Anime/EpDiscussion').default;

// 響け！ユーフォニアム
// ep.8 おまつりトライアングル
EpDiscussion.request("513161").then(d => console.log(d)).catch(d => console.log(d));