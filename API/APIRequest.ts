import {API, Subject} from './API';
import request, {post} from '../request';
import {loadCheerio} from '../utils';
/**
 * Return ep discussion
 * @see http://bgm.tv/
 */
export default class Request {

    static get(url: string, parser: {
        parseHtml(html: string): Object;
    }) {
        let html = "";
        return new Promise((resolve, reject) => {
            request(url)
            .then(ret => ret.text())
            .then(text => parser.parseHtml(text))
            .then(single => resolve(single))
            .catch(e => reject({
                    html: html, 
                    message: e,
                }) 
            );
        });
    }



}