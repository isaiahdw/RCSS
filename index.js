'use strict';

var cascade = require('./cascade');
var injectStyles = require('./injectStyles');
var reactMixin = require('./reactMixin');
var registerClass = require('./registerClass');

module.exports = {
  cascade: cascade,
  injectAll : injectStyles,
  mixin: reactMixin,
  registerClass: registerClass,
};
