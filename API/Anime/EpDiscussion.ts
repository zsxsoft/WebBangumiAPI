import {API, Subject} from './../API';
import APIRequest from '../APIRequest';
import Parser from '../Parsers/Discussion';
/**
 * Return ep discusstion
 * @see http://bgm.tv/
 */
export default class EpDiscussion extends APIRequest {

    /**
     * Get Information
     */
    static request(ep: string) {
        let url = `${API.Index}${API.Anime.Comment}`.replace("$id", ep);
        return this.get(url, Parser);
    }

}