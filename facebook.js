"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthorizationCode = exports.version = void 0;

var _simpleOauth = require("simple-oauth2");

/**
 * @copyright 2021-present Kriasoft (https://git.io/JOevo)
 */
const version = "v10.0";
exports.version = version;

class AuthorizationCode extends _simpleOauth.AuthorizationCode {
  constructor(options = {}) {
    var _options$id, _options$secret;

    super({
      client: {
        id: (_options$id = options.id) !== null && _options$id !== void 0 ? _options$id : process.env.FACEBOOK_APP_ID,
        secret: (_options$secret = options.secret) !== null && _options$secret !== void 0 ? _options$secret : process.env.FACEBOOK_APP_SECRET
      },
      auth: {
        tokenHost: "https://graph.facebook.com",
        tokenPath: `/${version}/oauth/access_token`,
        authorizeHost: "https://www.facebook.com",
        authorizePath: `/${version}/dialog/oauth`
      },
      options: options.options
    });
  }

}

exports.AuthorizationCode = AuthorizationCode;