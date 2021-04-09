/**
 * @copyright 2021-present Kriasoft (https://git.io/JOevo)
 */
import type { ModuleOptions } from "simple-oauth2";
import { AuthorizationCode as Base } from "simple-oauth2";
export declare const version = "v10.0";
export declare type AuthorizationCodeOptions = {
    /**
     * Facebook application ID.
     * @default process.env.FACEBOOK_APP_ID
     */
    id?: string;
    /**
     * Facebook application secret.
     * @default process.env.FACEBOOK_APP_SECRET
     */
    secret?: string;
    options?: ModuleOptions<"client_id">["options"];
};
export declare class AuthorizationCode extends Base {
    constructor(options?: AuthorizationCodeOptions);
}
