'use strict';
require('./node-global');
var Tucao = require('../API/Anime/Tucao').default;

// Re:ゼロから始める異世界生活
Tucao.request("140001", "3").then(d => console.log(d)).catch(d => console.log(d)); 