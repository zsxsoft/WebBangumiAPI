import {API} from './API';
import request, {post} from '../request';
import * as cheerio from 'cheerio';

type LoginField = {
    formhash: string;
    cookietime: string;
    email: string;
    password: string;
    loginsubmit: string;
    [key: string]: string;
};

/**
 * User Login
 * @see http://bgm.tv/
 */
export default class Login {
    static GetFormHash(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            request(API.Index).then(ret => {
                return ret.text();
            }).then(htmlString => {
                let $ = cheerio.load(htmlString);
                return $("[name='formhash']").val();
            }).then(val => resolve(val))
                .catch(reason => reject(reason));
        });
    }

    /**
     * Login to BGM
     */
    static request(email: string, password: string) {
        let paramter: LoginField = {
            formhash: "",
            cookietime: "2592000",
            email: email,
            password: password, 
            loginsubmit: "登录", 
        };
        return new Promise<string>((resolve, reject) => {
            this.GetFormHash().then(formhash => {
                // console.log(`Got formhash = ${formhash}`);
                // LOG HERE
                paramter.formhash = formhash;
                return post(`${API.Index}${API.Login}`, paramter);
            }).then(ret => {
                return ret.text();
            }).then(text => {
                if (text.indexOf("欢迎您回来") > 0) {
                    resolve(text);
                } else {
                    let err: IRequestError = {
                        html: text, 
                        message: "LOGIN_FAILED"
                    };
                    reject(err);
                }
            });

        });
    }

}