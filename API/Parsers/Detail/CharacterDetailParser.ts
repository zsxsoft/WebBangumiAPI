import * as Global from '../../../global';
import * as cheerio from 'cheerio';
import Parser from '../Parser';
import {API, Subject} from '../../API';
import {loadCheerio} from '../../../utils';
import {ICharacter} from './CharacterParser';
export type ICharacter = ICharacter;
export default class CharacterDetailParser extends Parser {
    
    static parse($: cheerio.Static) {
        let ret: ICharacter[] = [];
        $("#browserItemList>.user").each((index, element) => {
            let $e = $(element);
            let pushObj = <ICharacter>{};
            pushObj.name = {
                original: "", 
                chinese: ""
            };
            pushObj.avatar = $e.find(".userImage>.avatar").attr("src");
            pushObj.discussionCount = $e.find(".fade.rr").text().replace(/\(\+(\d+)\)/g, "$1");
            pushObj.job = $e.find(".badge_job").text();
            pushObj.name.original = $e.find(".userImage").text();
            pushObj.name.chinese = $e.find(".tip_j>.tip").text();
            pushObj.cv = [];
            $e.find("[rel='v:starring']").each((i, e) => {
                let $e = $(e);
                let cvObj = {
                    name: "", 
                    id: ""
                };
                cvObj.name = $e.text();
                cvObj.id = $e.attr("href").replace(/\/person\//ig, "");
                pushObj.cv.push(cvObj);
            });
            ret.push(pushObj);
        });
        return ret;
    }
}