import {API, Subject} from './../API';
import Parser from '../Parsers/Tucao';
import APIRequest from '../APIRequest';
/**
 * Return ep comments
 * @see http://bgm.tv/
 */
export default class Tucao extends APIRequest {

    /**
     * Get Watching list
     */
    static request(ep: string, page: string) {
        let url = `${API.Index}${API.Anime.Tucao}`.replace("$id", ep).replace("$page", page);
        return this.get(url, Parser);
    }

}