import * as cheerio from 'cheerio';
declare var global: Object;
export var fetch = (<any>global).fetch;
export function loadCheerio(html: string) {
    return cheerio.load(html, {
        decodeEntities: false, 
    });
}