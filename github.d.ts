/**
 * @copyright 2021-present Kriasoft (https://git.io/JOevo)
 */
import type { ModuleOptions } from "simple-oauth2";
import { AuthorizationCode as Base } from "simple-oauth2";
export declare type AuthorizationCodeOptions = {
    /**
     * GitHub client ID.
     * @default process.env.GITHUB_CLIENT_ID
     */
    id?: string;
    /**
     * GitHub client secret.
     * @default process.env.GITHUB_CLIENT_SECRET
     */
    secret?: string;
    options?: ModuleOptions<"client_id">["options"];
};
export declare class AuthorizationCode extends Base {
    constructor(options?: AuthorizationCodeOptions);
}
