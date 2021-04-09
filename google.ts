/**
 * @copyright 2021-present Kriasoft (https://git.io/JOevo)
 */

import type { ModuleOptions } from "simple-oauth2";
import { AuthorizationCode as Base } from "simple-oauth2";

export type AuthorizationCodeOptions = {
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

export class AuthorizationCode extends Base {
  constructor(options: AuthorizationCodeOptions = {}) {
    super({
      client: {
        id: options.id ?? (process.env.GOOGLE_CLIENT_ID as string),
        secret: options.secret ?? (process.env.GOOGLE_CLIENT_SECRET as string),
      },
      auth: {
        tokenHost: "https://accounts.google.com",
        tokenPath: "/o/oauth2/v2/auth",
        authorizeHost: "https://www.googleapis.com",
        authorizePath: "/oauth2/v4/token",
      },
      options: options.options,
    });
  }
}
