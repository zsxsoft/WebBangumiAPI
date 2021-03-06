import {API, Timeline as TimelineNamespace} from './API';
import * as Global from '../global';
import * as request from '../request';
import {loadCheerio} from '../utils';

type TimelineField = {
    ajax: string;
    type: string;
    [key: string]: string;
}

/**
 * Get timeline
 * @see http://bgm.tv/
 */
export default class Timeline {

    /**
     * Get timeline(returns HTML)
     */
    static request(type: TimelineNamespace.Type) {

        return new Promise<string>((resolve, reject) => {
            let timelineParam: TimelineField = <TimelineField>{};
            timelineParam.ajax = "1";
            timelineParam.type = TimelineNamespace.Type[type].toLowerCase();
            request.get(`${API.Index}${API.Timeline}`, timelineParam).then(ret => {
                return ret.text();
            }).then(html => {
                resolve(html);
            })
                .catch(reason => {
                    reject(<Global.IRequestError>{
                        message: reason
                    });
                });
        });

    }


}