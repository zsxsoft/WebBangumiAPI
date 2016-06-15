import {API, Subject} from '../../API';
import {loadCheerio, getAvatarFromBackground, getRealTime} from '../../../utils';
import Parser from '../Parser';
import InformationParser, {IInformation} from '../Detail/InformationParser';
import CharacterParser, {ICharacter} from '../Detail/CharacterParser';
import DiscussionParser, {IFloor} from '../Discussion/';
import * as cheerio from 'cheerio';
export type IPerson = {
    photo: {};
    information: IInformation;
    introduction: string;
    characters: ICharacter[];
    latestActivities: string[]; // @TODO
    comments: IFloor[];
};
/**
 * Person information
 * @todo
 * @see http://bgm.tv/
 */
export default class Person extends Parser {
    static parse($: cheerio.Static) {
        let ret: IPerson = <IPerson>{};
        ret.comments = <IFloor[]>DiscussionParser.parse($);
        ret.information = InformationParser.parse($);
        console.log(ret.information);
        return ret;
    }
} 