import * as cheerio from 'cheerio';
export interface ISupportKey {
    [key: string]: string;
}

export interface IRequestError {
    html: string;
    message: string;
}
