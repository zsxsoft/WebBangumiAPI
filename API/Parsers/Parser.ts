import * as Global from '../../global';
import * as cheerio from 'cheerio';
import {loadCheerio} from '../../utils';
/**
 * Global Parser
 * @see http://bgm.tv/
 */
export default class Parser {
    new() {

    }
    public constructor() {
        'fuck';
        // Do nothing
    }

    public static parseHtml(html: string) {
        let $ = loadCheerio(html);
        return this.parse($);
    }

    public static parse($: cheerio.Static) {
        return {};
    }

}