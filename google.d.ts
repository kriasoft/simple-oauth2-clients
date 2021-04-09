/**
 * @copyright 2021-present Kriasoft (https://git.io/JOevo)
 */
import type { ModuleOptions } from "simple-oauth2";
import { AuthorizationCode as Base } from "simple-oauth2";
export declare type AuthorizationCodeOptions = {
    /**
     * Google client ID.
     * @default process.env.GOOGLE_CLIENT_ID
     */
    id?: string;
    /**
     * Google client secret.
     * @default process.env.GOOGLE_CLIENT_SECRET
     */
    secret?: string;
    options?: ModuleOptions<"client_id">["options"];
};
export declare class AuthorizationCode extends Base {
    constructor(options?: AuthorizationCodeOptions);
}
