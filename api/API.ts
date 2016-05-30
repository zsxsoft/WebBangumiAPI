export namespace API {
    export let Index = "http://bgm.tv";
    export const Login = "/login";
    export const WatchingList = "/";
    export const Timeline = "/timeline";
    export const Anime = {
        Comment: "/ep/$id", 
        Watched: "/subject/ep/$id/status/watched", 
    };
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
        Watched, 
        Air, 
        NA, 
        Drop, 
        Queue, 
    }
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
    export type IEpStatus = {
        id: string;
        status: EpStatus;
        name: string;
        episode: string;
        subjectId: string;
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