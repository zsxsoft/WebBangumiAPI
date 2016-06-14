import {API, Subject} from './../API';
import request, {post} from '../../request';
import {loadCheerio} from '../../utils';
import Parser from '../Tucao/Parser';
/**
 * Return ep comments
 * @see http://bgm.tv/
 */
export default class Tucao {

    /**
     * Get Watching list
     */
    static request(ep: string, page: string) {
        let html = "";
        return new Promise((resolve, reject) => {
            request(`${API.Index}${API.Anime.Tucao}`.replace("$id", ep).replace("$page", page))
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