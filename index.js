'use strict';

var cascade = require('./cascade');
var injectStyles = require('./injectStyles');
var registerClass = require('./registerClass');

module.exports = {
  cascade: cascade,
  injectAll : injectStyles,
  registerClass: registerClass,
};
