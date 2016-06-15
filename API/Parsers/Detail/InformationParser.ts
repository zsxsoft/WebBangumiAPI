import * as Global from '../../../global';
import Parser from '../Parser';
import * as cheerio from 'cheerio';
import {API, Subject} from './../../API';
import {loadCheerio} from '../../../utils';
export type IInformation = {
    [key: string]: Subject.IInfoboxValue[]
};
/**
 * Set ep status
 * @see http://bgm.tv/
 */

export default class InformationParser extends Parser {

    static parse($: cheerio.Static): IInformation {
        let ret: IInformation = <IInformation>{};
        $("#infobox li").each((index, element) => {
            let $e = $(element);
            let fieldName = $e.find(".tip");
            let nameString = fieldName.text();
            let nextAll = fieldName.nextAll();
            let template = {
                value: "", 
                chinese: "", 
                id: ""
            };
            if (nextAll.length > 0) {
                ret[nameString] = <Subject.IInfoboxValue[]>[];
                nextAll.each((index, element) => {
                    let $e = $(element);
                    let object = Object.assign({}, template);
                    object.value = $e.text();
                    object.chinese = $e.attr("title") || object.value;
                    object.id = $e.attr("href").replace("/person/", "") || "";
                    ret[nameString].push(object);
                });
            } else {
                ret[nameString] = [Object.assign(template, {value: $e.contents().eq(1).text()})];
            }
        });
        return ret;
    }

}