import {API, Subject} from './../API';
import APIRequest from '../APIRequest';
import Parser from '../Parsers/Detail/AnimeDetailParser';
/**
 * Return ep information
 * @see http://bgm.tv/
 */
export default class Information extends APIRequest {

    /**
     * Get Information
     */
    static request(ep: string) {
        let url = `${API.Index}${API.Anime.Information}`.replace("$id", ep);
        return this.get(url, Parser);
    }

}