import {API, Subject} from './../API';
import APIRequest from '../APIRequest';
import Parser from '../Parsers/Person';
/**
 * Return ep discussion
 * @see http://bgm.tv/
 */
export default class Person extends APIRequest {

    /**
     * Get Person
     */
    static request(id: string) {
        let url = `${API.Index}${API.Person}`.replace("$id", id);
        return this.get(url, Parser);
    }

} 