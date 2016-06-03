import {API, Subject} from './../API';
import Tucao, {ITucao} from '../Tucao/Parser';
import {loadCheerio} from '../../utils';

export type ICharacter = {
    name: {
        original: string;
        Chinese: string;    
    }, 
    job: string;
    avatar: string;
    id: string;
    cv: {
        id: string;
        name: string;
    }[], 
    discussionCount: string;
}
export type IInformation = {
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
export default class Parser {

    static parse(html: string): IInformation {
        let ret: IInformation = <IInformation>{};
        ret.tucao = Tucao.parse(html);
        return ret;
       
    }

}