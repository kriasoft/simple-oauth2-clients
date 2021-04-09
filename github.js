"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthorizationCode = void 0;

var _simpleOauth = require("simple-oauth2");

/**
 * @copyright 2021-present Kriasoft (https://git.io/JOevo)
 */
class AuthorizationCode extends _simpleOauth.AuthorizationCode {
  constructor(options = {}) {
    var _options$id, _options$secret;

    super({
      client: {
        id: (_options$id = options.id) !== null && _options$id !== void 0 ? _options$id : process.env.GITHUB_CLIENT_ID,
        secret: (_options$secret = options.secret) !== null && _options$secret !== void 0 ? _options$secret : process.env.GITHUB_CLIENT_SECRET
      },
      auth: {
        tokenHost: "https://github.com",
        tokenPath: "/login/oauth/access_token",
        authorizeHost: "https://github.com",
        authorizePath: "/login/oauth/authorize"
      },
      options: options.options
    });
  }

}

exports.AuthorizationCode = AuthorizationCode;