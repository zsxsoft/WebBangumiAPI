import {API, Subject} from './../API';
import request, {post} from '../../request';
import {loadCheerio} from '../../utils';
import Parser from '../Parsers/Discussion';
/**
 * Return ep discussion
 * @see http://bgm.tv/
 */
export default class EpDiscussion {

    /**
     * Get Watching list
     */
    static request(ep: string) {
        let html = "";
        return new Promise((resolve, reject) => {
            request(`${API.Index}${API.Anime.Comment}`.replace("$id", ep))
            .then(ret => ret.text())
            .then(text => Parser.parseSingle(text))
            .then(single => resolve(single))
            .catch(e => reject({
                    html: html, 
                    message: e,
                }) 
            );
        });
    }



}