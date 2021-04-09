# OAuth 2.0 clients (Google, Facebook, Twitter, etc.)</sup>

[![NPM Version](https://img.shields.io/npm/v/simple-oauth2-clients?style=flat-square)](https://www.npmjs.com/package/simple-oauth2-clients)
[![NPM Downloads](https://img.shields.io/npm/dm/simple-oauth2-clients?style=flat-square)](https://www.npmjs.com/package/simple-oauth2-clients)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg?style=flat-square)](http://www.typescriptlang.org/)
[![Donate](https://img.shields.io/badge/dynamic/json?color=%23ff424d&label=Patreon&style=flat-square&query=data.attributes.patron_count&suffix=%20patrons&url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F233228)](http://patreon.com/koistya)
[![Discord](https://img.shields.io/discord/643523529131950086?label=Chat&style=flat-square)](https://discord.gg/bSsv7XM)

Pre-configured OAuth 2.0 clients based on [`simple-oauth2`](http://lelylan.github.io/simple-oauth2/). You can use it as a simpler alternative to Passport.js for implementing login flows via 3rd party login providers such as Google, Facebook, Apple, Twitter, etc.

- **Google** OAuth 2.0 client ([docs](https://developers.google.com/identity/protocols/oauth2/))
- **Facebook** OAuth 2.0 client ([docs](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow))
- **GitHub** OAuth 2.0 client ([docs](https://docs.github.com/en/developers/apps/authorizing-oauth-apps))
- ... more is coming (create a [PR](https://docs.github.com/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request))

## Getting Started

```bash
$ npm install simple-oauth2-clients
```

Provide environment variables for the OAuth 2.0 providers that you need, For example:

```bash
# Google OAuth 2.0 credentials
# https://console.cloud.google.com/apis/credentials
GOOGLE_CLIENT_ID=xxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxxxx

# Facebook App
# https://developers.facebook.com/apps/
FACEBOOK_APP_ID=xxxxx
FACEBOOK_APP_SECRET=xxxxx

# GitHub App
# https://github.com/settings/applications
GITHUB_CLIENT_ID=xxxxx
GITHUB_CLIENT_SECRET=xxxxx

...
```

```js
import express from "express";
import {
  FacebookAuthorizationCode,
  GitHubAuthorizationCode,
} from "simple-oauth2-clients";

const app = express();
const github = new GitHubAuthorizationCode();
const facebook = new FacebookAuthorizationCode();

app.get("/auth/github", function (req, res) {
  const authorizeUrl = github.authorizeURL({
    redirect_uri: "https://example.com/auth/github/return",
  });

  res.redirect(authorizeUrl);
});

app.get("/auth/github/return", async function (req, res, next) {
  try {
    const { token } = await github.getToken({
      code: req.query.code,
      redirect_uri: "https://example.com/auth/github/return",
    });

    // Create a new user, or authenticate an existing one.
    // await authorize(req, tokens);
    // res.redirect("/");
  } catch (err) {
    next(err);
  }
});

/* ... same for Facebook, Google, Twitter, etc. */

app.listen(8080);
```

## Related Projects

- [GraphQL API Starter Kit](https://github.com/kriasoft/graphql-starter) — project template, pre-configured with TypeScript, GraphQL.js, React, and Relay.

## How to Contribute

Please create a [PR](https://docs.github.com/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) or send me a message on [Discord](https://discord.gg/bSsv7XM).

## License

Copyright © 2021-present Kriasoft. This source code is licensed under the MIT license found in the
[LICENSE](https://github.com/kriasoft/simple-oauth2-clients/blob/main/LICENSE) file.

---

<sup>Made with ♥ by Konstantin Tarkus ([@koistya](https://twitter.com/koistya), [blog](https://medium.com/@koistya))
and [contributors](https://github.com/kriasoft/graphql-starter/graphs/contributors).</sup>
