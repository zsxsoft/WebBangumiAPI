import * as Global from '../../../global';
import * as cheerio from 'cheerio';
import Parser from '../Parser';
import {API, Subject} from './../../API';
import {loadCheerio} from '../../../utils';
export type IInformation = {
    cover: string;
    info: {
        [key: string]: Subject.IInfoboxValue[];
    }
};
/**
 * Set ep status
 * @see http://bgm.tv/
 */

export default class InformationParser extends Parser {

    static parse($: cheerio.Static): IInformation {
        let ret: IInformation = <IInformation>{
            info: {}, 
        };
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
            if (!ret.info[nameString]) {
                ret.info[nameString] = <Subject.IInfoboxValue[]>[];
            }
            if (nextAll.length > 0) {
                nextAll.each((index, element) => {
                    let $e = $(element);
                    let object = Object.assign({}, template);
                    object.value = $e.text();
                    object.chinese = $e.attr("title") || object.value;
                    object.id = $e.attr("href").replace("/person/", "") || "";
                    ret.info[nameString].push(object);
                });
            } else {
                ret.info[nameString].push(Object.assign(template, {value: $e.contents().eq(1).text()}));
            }

        });

        // Parse cover
        ret.cover = $(".infobox img.cover").attr("src");
        return ret;
    }

}