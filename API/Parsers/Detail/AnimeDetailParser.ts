import * as Global from '../../../global';
import * as cheerio from 'cheerio';
import Parser from '../Parser';
import {API, Subject} from '../../API';
import {loadCheerio} from '../../../utils';
import GlobalParser, {IDetail} from './GlobalParser';

export default class AnimeDetailParser extends Parser {
    static parse($: cheerio.Static) {
        return GlobalParser.parse($);
    }
    
}