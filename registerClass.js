'use strict';

var registry = require('./registry');
var sha1 = require('sha1');

function hashStyle(styleObj) {
  return sha1(JSON.stringify(styleObj));
}

function generateValidCSSClassName(styleId) {
  // CSS classNames can't start with a number.
  return 'c' + styleId;
}

function registerClass(styleObj) {
  var styleId = generateValidCSSClassName(hashStyle(styleObj));

  var style = {
    className: styleId,
    style: styleObj
  };

  if (registry.get(styleId) === undefined) {
    registry.set(styleId, style);
  }

  return style;
}

module.exports = registerClass;
