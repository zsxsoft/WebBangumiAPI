import {API, Subject} from './../API';
import * as cheerio from 'cheerio';
export type ITucao = {
    name: string;
    userId: string;
    avatar: string;
    time: number;
    score: number;
    content: string;
}
/**
 * Set ep status
 * @todo
 * @see http://bgm.tv/
 */
export default class Tucao {

    static parse(html: string): ITucao[] {
        let ret: ITucao[] = [];
        return ret;
    }

}