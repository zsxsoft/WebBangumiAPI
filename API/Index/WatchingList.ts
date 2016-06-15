import * as Global from '../../global';
import {API, Subject} from './../API';
import APIRequest from '../APIRequest';
import Parser from '../Parsers/Index/WatchingList';
export type IWatchingSubject = Subject.IWatchingSubject;
export type IWatchingList = {
    gh: string;
    watching: IWatchingSubject[]
};
/**
 * Get watching list
 * @see http://bgm.tv/
 */
export default class WatchingList extends APIRequest {

    /**
     * Get Watching list
     */
    static request() {
        let url = `${API.Index}`;
        return this.get(url, Parser);
    }
}