import {API, Subject} from './../API';
import Parser from '../Parsers/Detail/PeopleInSubjectParser';
import APIRequest from '../APIRequest';
/**
 * Persons
 * @see http://bgm.tv/
 */
export default class Person extends APIRequest {

    /**
     * Get Watching list
     */
    static request(ep: string, page: string) {
        let url = `${API.Index}${API.Anime.Person}`.replace("$id", ep);
        return this.get(url, Parser);
    }

}