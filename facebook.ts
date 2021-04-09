/**
 * @copyright 2021-present Kriasoft (https://git.io/JOevo)
 */

import type { ModuleOptions } from "simple-oauth2";
import { AuthorizationCode as Base } from "simple-oauth2";

export const version = "v10.0";

export type AuthorizationCodeOptions = {
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

export class AuthorizationCode extends Base {
  constructor(options: AuthorizationCodeOptions = {}) {
    super({
      client: {
        id: options.id ?? (process.env.FACEBOOK_APP_ID as string),
        secret: options.secret ?? (process.env.FACEBOOK_APP_SECRET as string),
      },
      auth: {
        tokenHost: "https://graph.facebook.com",
        tokenPath: `/${version}/oauth/access_token`,
        authorizeHost: "https://www.facebook.com",
        authorizePath: `/${version}/dialog/oauth`,
      },
      options: options.options,
    });
  }
}
