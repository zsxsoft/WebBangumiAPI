import {API, Subject} from './API';
import request, {post} from '../request';
import {loadCheerio} from '../utils';
export type IWatchingSubject = Subject.IWatchingSubject;
export type IWatchingList = {
    gh: string;
    watching: IWatchingSubject[]
};
/**
 * Get watching list
 * @see http://bgm.tv/
 */
export default class WatchingList {

    /**
     * Get Watching list
     */
    static request() {

        return new Promise<IWatchingList>((resolve, reject) => {
            request(API.Index).then(ret => {
                return ret.text();
            }).then(html => {
                return this.analyzeHtml(html);
            }).then(ret => resolve(ret))
                .catch(reason => {
                    reject(<IRequestError>{
                        message: reason
                    });
                });
        });

    }


    /**
     * Get Object from HTML
     */
    static analyzeHtml(html: string): IWatchingList {
        let $ = loadCheerio(html);
        let $li = $("li[subject_type]");
        let ret: IWatchingSubject[] = [];
        $li.each((index, element) => {
            let newSubject: IWatchingSubject = <IWatchingSubject>{};
            let $e = $(element);
            let $a = $e.find("a[ep_id]");
            let $m = $e.find(".progress_percent_text");
            let maxPercent = $m.text().replace(/\[|\]/g, "").split("/");
            newSubject.type = parseInt($e.attr("subject_type")) || Subject.Type.All;
            newSubject.id = $a.attr("subject_id") || "";
            newSubject.cover = $e.find("img").attr("src") || "";
            newSubject.name = $e.find("a.subjectItem.title").attr("title") || "";
            newSubject.maxPercent = maxPercent[1] || "";
            newSubject.percent = maxPercent[0] || "";
            newSubject.ep = [];
            $(`.load-epinfo[subject_id=${newSubject.id}]`).each((index, element) => {
                let $ep = $(element);
                let ret: Subject.IEpStatus = <Subject.IEpStatus>{};
                ret.episode = $ep.text();
                ret.id = $ep.attr("id").replace("prg_", "");
                ret.name = $ep.attr("title");
                ret.status = Subject.CastStringToEpStatus($ep.attr("class").replace("load-epinfo epBtn", ""));
                ret.subjectId = $ep.attr("subject_id");
                newSubject.ep.push(ret);
            });

            ret.push(newSubject);
        });



        let $ghArea = $("#subject_prg_content").find("a.ep_status");
        let ghs: string[] = [];
        let gh: string;
        let ghEqualNums = 0;
        // if 3 GHs equals, use it as the return.
        for (let ghIndex = 0; ghIndex < $ghArea.length && ghEqualNums < 3; ghIndex++) {
            let ghHref = $($ghArea[ghIndex]).attr("href");
            let ghObject = /gh=(.*?)$/gi.exec(ghHref);
            if (ghObject === null) continue;
            if (gh !== ghObject[1]) {
                ghEqualNums = 1;    
                gh = ghObject[1];    
            } else {
                ghEqualNums++;
            }
        }
        
        return {
            gh: gh,
            watching: ret,
        };
    }

}