import {API, Subject} from './../API';
import * as cheerio from 'cheerio';
type IFloorAuthor = {
    url: string;
    avatar: string;
    id: string;
    name: string; 
    signature: string;
}
type IFloor = {
    id: string;
    floor: string;
    time: number;
    author: IFloorAuthor;
    content: string;
    children: IFloor[];
};
/**
 * Set ep status
 * @see http://bgm.tv/
 */
export default class Parser {

    static parseRow($: cheerio.Static, rows: cheerio.Cheerio, isSub = false) {
        let ret: IFloor[] = [];
        rows.each((index, row) => {
            let rowRet: IFloor = <IFloor>{};
            let $row = $(row);
            let $author = $row.find(".inner>strong").eq(0);
            rowRet.author = <IFloorAuthor>{};
            rowRet.floor = $row.find(".floor-anchor").text().replace("#", "");
            rowRet.content = $row.find(isSub ? ".cmt_sub_content" : ".message").html().toString().trim();
            rowRet.time = new Date($row.find(".re_info").text().trim().replace(/^\#\d+(-\d+)? - /, "")).getTime();
            rowRet.id = $row.attr("id").replace(/topic_reply_|post_/, "");
            rowRet.author.avatar = $row.find(".avatarNeue").css("background-image").replace(/url\(["'](.*?)["']\)/, "$1");
            rowRet.author.name = $author.text();
            rowRet.author.url = $author.find("a").attr("href");
            rowRet.author.id = rowRet.author.url.replace("/user/", "");
            rowRet.author.signature = $row.find(".tip_j").eq(0).html() || "";
            rowRet.children = this.parseRow($, $row.find(".topic_sub_reply"), true);
            ret.push(rowRet);
        });      
        return ret;
    }
    /**
     * Parse Discussion
     */
    static parseSingle(html: string) {
        
        let $ = cheerio.load(html, {
            decodeEntities: false
        });
        let rowReply = $(".commentList").find(".row_reply");
        let ret = this.parseRow($, rowReply);
        return ret;
    }
    
    static parseGroup(html: string) {
        
    }



}