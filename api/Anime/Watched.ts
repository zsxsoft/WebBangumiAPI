import {API, Subject} from './../API';
import request, {post} from '../../request';
import * as cheerio from 'cheerio';
type IWatchingSubject = Subject.IWatchingSubject;
/**
 * Set ep status
 * @see http://bgm.tv/
 */
export default class Watched {

    /**
     * Get Watching list
     */
    static request(ep: string[], gh: string) {
        let newestEp = ep[ep.length - 1];
        let combinedUrl = `${API.Index}${API.Anime.Watched}?gh=${gh}&ajax=1`.replace("$id", newestEp);
        return new Promise<boolean>((resolve, reject) => {
            post(combinedUrl, {
                ep_id: ep.join(",")
            }).then(ret => {
                return ret.json();
            }).then(json => {
                return json.status === "ok";
            }).catch(reason => {
                reject(<IRequestError>{
                    message: reason
                });
            });
        });

    }



}