import {fetch} from './utils';
let defaultHeader = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2739.0 Safari/537.36', 
    'Cookie': '',
};
let cookies: ISupportKey = {};


function cookieToString(cookieObject: ISupportKey): string {
    let ret: string[] = [];
    Object.keys(cookieObject).forEach(value => {
        ret.push(`${value}=${cookieObject[value]}`);
    });
    return ret.join("; ");
}
function parseCookie(cookiesString: string[]) {
    if (cookiesString === null) return;
    cookiesString.forEach(value => {
        let cookieObj = value.split("=");
        let cookieName = cookieObj[0];
        let cookieValue = cookieObj[1].split(";")[0];
        cookies[cookieName] = cookieValue;
    })
}
/** 
 * Request
 */
export default function request(url: string | Request, init: RequestInit = {}): Promise<Response> {
    if (!init.headers) init.headers = {};
    let mergedHeader = Object.assign(init.headers, defaultHeader);
    mergedHeader.Cookie = cookieToString(cookies);
    return fetch(url, Object.assign(init, mergedHeader)).then((value: Response) => {
        parseCookie(value.headers.getAll("Set-Cookie"));
        return value;
    });
}
/** 
 * Post Bangumi
 */
export function post(url: string | Request, formData: ISupportKey, init: RequestInit = {}): Promise<Response> {
    if (!init.headers) init.headers = <Headers>{};
    let body :string[] = [];
    Object.keys(formData).forEach(key => body.push(`${key}=${encodeURIComponent(formData[key])}`));
    init.body = body.join("&");
    (<ISupportKey>init.headers)['Content-Type'] = 'application/x-www-form-urlencoded';
    init.method = 'POST';
    return request(url, init);
}
/** 
 * Get Bangumi
 */
export function get(url: string | Request, formData: ISupportKey, init: RequestInit = {}): Promise<Response> {
    if (!init.headers) init.headers = <Headers>{};
    
    let body :string[] = [];
    Object.keys(formData).forEach(key => body.push(`${key}=${encodeURIComponent(formData[key])}`));
    init.method = 'GET';
    url += `?${body.join("&")}`;
    console.log(url);
    return request(url, init);
}


/**
 * Return saved cookies.
 */
export function getCookies() {
    return cookies;
}

/** 
 * Set cookies.
 */
export function setCookies(cookieObj: ISupportKey) {
    cookies = Object.assign({}, cookieObj);
}