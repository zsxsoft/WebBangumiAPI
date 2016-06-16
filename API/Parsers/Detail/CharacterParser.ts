import * as Global from '../../../global';
import * as cheerio from 'cheerio';
import Parser from '../Parser';
import {API, Subject} from '../../API';
import {loadCheerio} from '../../../utils';


export type ICharacter = {
    name: {
        original: string;
        chinese: string;    
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

export default class CharacterDetailParser extends Parser {
    
    static parse($: cheerio.Static) {
        let ret: ICharacter[] = [];
        
        return ret;
    }
}
