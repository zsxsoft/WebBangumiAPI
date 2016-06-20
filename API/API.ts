export namespace API {
    export let Index = "http://bgm.tv";
    export const Login = "/login";
    export const WatchingList = "/";
    export const Timeline = "/timeline";
    export const Anime = {
        Comment: "/ep/$id", 
        Watched: "/subject/ep/$id/status/watched", 
        Information: "/subject/$id", 
        Tucao: "/subject/$id/comments?page=$page", 
        Person: "/subject/$id/persons",
        Character: "/subject/$id/characters"
    };  
    export const Person = "/person/$id";
}
 
export namespace Timeline {
    export enum Type {
        All,
        Say,
        Subject,
        Progress,
        Blog,
        Mono,
        Relation,
        Group,
        Wiki,
        Index,
        Doujin,
    }
}
export namespace Subject {
    export enum Type {
        All = 0,
        Book = 1,
        Anime = 2,
        Music = 3,
        Game = 4,
        Real = 6,
    }
    export enum EpStatus {
        /**
         * 已经观看
         */
        Watched,
        /**
         * 可以观看（但未观看）
         */ 
        Air, 
        /**
         * 状态未知
         */
        NA, 
        /**
         * 抛弃
         */
        Drop,
        /**
         * 想看
         */ 
        Queue, 
    }
    export enum FavoriteStatus {
        /**
         * 没有记录
         */
        NA, 
        /**
         * 想看
         */
        Wish,
        /**
         * 看过
         */ 
        Collect, 
        /**
         * 在看
         */
        Do, 
        /**
         * 搁置
         */
        On_hold, 
        /**
         * 抛弃
         */
        Dropped
    }
    /**
     * 我的收藏信息
     */
    export type IFavoriteStatus = {
        status: FavoriteStatus;
        score: number;
        tag: string[];
        tucao: string;
    }
    /**
     * 播放信息
     */
    export type IWatchingSubject = {
        type: Type;
        id: string;
        cover: string;
        ep: IEpStatus[];
        name: string;
        percent: string; // 0/??
        maxPercent: string; // 0/??
        watchingPeople: number;
    }
    /**
     * 单集个人记录状态
     */
    export type IEpStatus = {
        id: string;
        status: EpStatus;
        name: string;
        episode: string;
        subjectId: string;
    }
    /**
     * 左侧信息盒属性
     */
    export type IInfoboxValue = {
        value: string;
        chinese: string;
        id: string;
    }
    export function CastStringToEpStatus(str: string): EpStatus {
        for (let epMember in EpStatus) {
            if (epMember === str) {
                return <any>EpStatus[epMember];
            }
        }
        return EpStatus.NA;
    }
}