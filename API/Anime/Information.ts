import {API, Subject} from './../API';
import request, {post} from '../../request';
import {loadCheerio} from '../../utils';
import Parser from '../Information/Parser';
/**
 * Return ep information
 * @see http://bgm.tv/
 */
export default class Information {

    /**
     * Get Information
     */
    static request(ep: string) {
        let html = "";
        return new Promise((resolve, reject) => {
            request(`${API.Index}${API.Anime.Information}`.replace("$id", ep))
            .then(ret => ret.text())
            .then(text => Parser.parse(text))
            .then(single => {
                resolve(single);    
            }).catch(e => {
                reject({
                    html: html, 
                    message: e,  
                });  
            });
        });
    }



}