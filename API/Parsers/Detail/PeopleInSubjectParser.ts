import * as Global from '../../../global';
import * as cheerio from 'cheerio';
import Parser from '../Parser';
import {API, Subject} from './../../API';
import {loadCheerio} from '../../../utils';
export type IPerson = {
    name: {
        origin: string;
        chinese: string;
    };
    id: string;
    type: string;
    photo: string, 
    jobs: string[]; 
    cv: {
        name: string; 
        chinese: string;
        avatar: string;
        id: string;
    }[];
    discussionCounts: number;
    info: {
        [key: string]: string;
    }
};

export default class PersionInSubjectParser extends Parser {

    static parse($: cheerio.Static): IPerson[] {
        let ret: IPerson[] = <IPerson[]>[];
        
        $(".light_odd").each((index, element) => {
            let $e = $(element);
            let pushObj = <IPerson>{};
            pushObj.id = $e.find("a.tip").attr("href").replace(/\/\w+\//gi, "");
            pushObj.name = {
                origin: $e.find("h2>a").contents().filter((i, e) => e.type === 'text').text().replace(" /", "").trim(), 
                chinese: $e.find("h2").find(".tip").text().replace(" /", "").trim(), 
            };
            pushObj.jobs = Array.from($e.find(".badge_job")).map(e => $(e).text());
            pushObj.photo = $e.find("img.avatar").attr("src");
            pushObj.info = {};
            $e.find(".badge_job").parent().contents().filter((i, e) => e.type === 'text').each((i, e) => {
                let text = $(e).text().trim();
                if (text === "") return;
                text.split(" / ").forEach(value => {
                    let splitted = value.split(" ");
                    pushObj.info[splitted[0]] = splitted[1];
                });
            });

            let $na = $e.find(".na");
            pushObj.discussionCounts = $na.length === 0 ? 0 : parseInt($na.text().replace(/\(\+(\d+)\)/g, "$1"));
            pushObj.cv = [];
            
            pushObj.type = "person";
            $e.find(".actorBadge").each((index, element) => {
                let $e = $(element);
                pushObj.cv.push({
                    id: $e.find("a.avatar").attr("href").replace("/person/", ""),
                    name: $e.find(".l").text(),
                    chinese: $e.find(".grey").text(), 
                    avatar: $e.find("img.avatar").attr("src")
                });
                pushObj.type = "character";
            });
            ret.push(pushObj);
        });

        return ret;
    }

}