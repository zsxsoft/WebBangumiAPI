import {API, Subject} from './../API';
import APIRequest from '../APIRequest';
import Parser from '../Parsers/Discussion';
/**
 * Return ep discussion
 * @see http://bgm.tv/
 */
export default class EpDiscussion extends APIRequest {

    /**
     * Get Person
     */
    static request(ep: string) {
        let url = `${API.Index}${API.Anime.Person}`.replace("$id", ep);
        return this.get(url, Parser);
    }

}