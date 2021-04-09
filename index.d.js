"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  FacebookAuthorizationCode: true,
  GitHubAuthorizationCode: true
};
Object.defineProperty(exports, "FacebookAuthorizationCode", {
  enumerable: true,
  get: function () {
    return _facebook.AuthorizationCode;
  }
});
Object.defineProperty(exports, "GitHubAuthorizationCode", {
  enumerable: true,
  get: function () {
    return _github.AuthorizationCode;
  }
});

var _facebook = require("./facebook");

var _github = require("./github");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});