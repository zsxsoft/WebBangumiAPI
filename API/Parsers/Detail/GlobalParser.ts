import * as Global from '../../../global';
import * as cheerio from 'cheerio';
import Parser from '../Parser';
import {API, Subject} from './../../API';
import Tucao, {ITucao} from '../Tucao';
import Information, {IInformation} from './InformationParser';
import {ICharacter} from './CharacterParser';

export type IDetail = {
    /**
     * 类型
     */
    type: Subject.Type;
    id: string;
    /**
     * 动画简介
     */
    introduction: string;
    /**
     * 动画信息
     */
    info: IInformation;
    /**
     * 单集播放状态
     */
    ep: Subject.IEpStatus[];
    /**
     * 收藏盒
     */
    favoriteBox: Subject.IFavoriteStatus;
    /**
     * 标注为
     */
    tags: {
        id: string;
        name: string;
        count: string;
    }[];
    /**
     * 关联条目
     */
    relationship: {
        id: string;
        typeString: string;
        image: string;
        name: string;
    }[]; 
    /**
     * 角色列表
     */
    characters: ICharacter[];
    /**
     * 大概会喜欢
     */
    maybeLike: {
        id: string;
        image: string;
        name: string;
    }[]; 
    /**
     * 评论
     */
    comments: {
        id: string;
        title: string;
        author: {
            name: string;
            id: string;
            avatar: string;
        };
        introduction: string;
        time: number;
        replies: number;
                
    }[];
    /**
     * 讨论版
     */
    discussions: {
        title: string;
        author: {
            name: string;
            id: string;
        }
        replies: string;
        time: number;
    }[];
    /** 
     * 推荐本条目的目录
     */
    recommendedIndexs: {
        id: string;
        avatar: string;
        name: string;
        creator: {
            name: string;
            id: string;
        }
    }[]; 
    /**
     * 推荐本条目的群组
     */
    groups: {
        avatar: string;
        name: string;
        id: string;
        memberCount: string;
    }[];
    /**
     * 吐槽箱
     */
    tucao: ITucao[];
    /**
     * 谁看这部动画
     * 我不打算做左边XXXX看过的那部分了
     */
    watching: {
        wishes: number; 
        collections: number;
        doings: number;
        on_hold: number;
        dropped: number;
    }
    
    
};
/**
 * Set ep status
 * @see http://bgm.tv/
 */

export default class GlobalParser extends Parser {

    public static parse($: cheerio.Static): IDetail {
        let ret: IDetail = <IDetail>{};
        ret.info = Information.parse($);
        ret.tucao = Tucao.parse($);
        return ret;
       
    }

}