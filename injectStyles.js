/* global document */

'use strict';

var registry = require('./registry');
var styleRuleConverter = require('./styleRuleConverter');

function descriptorsToString(styleDescriptor) {
  return styleRuleConverter.rulesToString(
    styleDescriptor.className,
    styleDescriptor.style
  );
}

function getStylesString (styles) {
  var str = '';
  for (var key in styles) {
    if ( ! styles.hasOwnProperty(key)) {
      continue;
    }
    str += descriptorsToString(styles[key]);
  }

  registry.reset();

  return str;
}

module.exports = function() {
  var styles = getStylesString(registry.getAll());

  // Ignore if we don't have any styles to render
  if (styles.length === 0) {
    return;
  }

  var tag = document.createElement('style');
  tag.innerHTML = styles;

  document.getElementsByTagName('head')[0].appendChild(tag);
};
