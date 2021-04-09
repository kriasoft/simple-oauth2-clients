/**
 * @copyright 2021-present Kriasoft (https://git.io/JOevo)
 */

import type { ModuleOptions } from "simple-oauth2";
import { AuthorizationCode as Base } from "simple-oauth2";

export type AuthorizationCodeOptions = {
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

export class AuthorizationCode extends Base {
  constructor(options: AuthorizationCodeOptions = {}) {
    super({
      client: {
        id: options.id ?? (process.env.GITHUB_CLIENT_ID as string),
        secret: options.secret ?? (process.env.GITHUB_CLIENT_SECRET as string),
      },
      auth: {
        tokenHost: "https://github.com",
        tokenPath: "/login/oauth/access_token",
        authorizeHost: "https://github.com",
        authorizePath: "/login/oauth/authorize",
      },
      options: options.options,
    });
  }
}
