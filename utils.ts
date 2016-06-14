declare var require: Function;
declare var global: Object;
import * as cheerio from 'cheerio';
const strtotime = require('locutus/php/datetime/strtotime');

export var fetch = (<any>global).fetch;
export function loadCheerio(html: string) {
    return cheerio.load(html, {
        decodeEntities: false, 
    });
}
export function getAvatarFromBackground(css: string) {
    return css.replace(/url\(["'](.*?)["']\)/, "$1");
}
export function getRealTime(timeString: string) {
    let time = timeString.trim();
    if (time.indexOf("ago") > 0) {
        time = time.replace(/(.+)ago$/g, "$1").replace(/(\d+)([a-z])/g, "-$1 $2 ");
    }
    time = time.replace(/ d /g, " day ").replace(/ h /g, " hour ").replace(/ m /g, " minute ");
    return strtotime(time) * 1000;
}