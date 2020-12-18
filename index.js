// eslint-disable-next-line spaced-comment
/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = (function setup() {
  var p = require('pify'), f = require('is-fn');
  function pam(orig) {
    var d = {}, v;
    Object.keys(orig).forEach(function c(k) {
      v = orig[k];
      if (d[k] === v) { return d; }
      if (v && f(v)) { v = p(v.bind(orig)); }
      d[k] = v;
    });
    return d;
  }
  return pam;
}());
