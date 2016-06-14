import {API, Subject} from './../API';
import {loadCheerio, getAvatarFromBackground, getRealTime} from '../../utils';
export type ITucao = {
    name: string;
    userId: string;
    avatar: string;
    time: number;
    score: number;
    content: string;
}
/**
 * Set ep status
 * @todo
 * @see http://bgm.tv/
 */
export default class Tucao {

    static parse(html: string): ITucao[] {
        let ret: ITucao[] = [];
        let $ = loadCheerio(html);
        let commentBox = $("#comment_box");
        commentBox.find(".item").each((index, element) => {
            let rowRet: ITucao = <ITucao>{};
            let $e = $(element);
            rowRet.avatar = getAvatarFromBackground($e.find(".avatarNeue").css("background-image"));
            rowRet.content = $e.find(".text>p").text();
            rowRet.name = $e.find(".text>a.l").text();
            rowRet.userId = $e.find(".text>a.l").attr("href").replace(/\/user\//, "");
            rowRet.time = getRealTime($e.find("small").text().replace("@", ""));
            if ($e.find(".starsinfo").length === 0) {
                rowRet.score = 0;
            } else {
                rowRet.score = parseInt($e.find(".starsinfo").attr("class").toString().replace("starsinfo", "").replace("sstars", "").trim());
            }
            ret.push(rowRet);
        });
        return ret;
    }

}