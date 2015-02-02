'use strict';

var RCSS = require('./');

var Mixin = {
  componentWillMount: function () {
    RCSS.injectAll();
  }
};

// Support React Hot Loader
if (module.hot) {
  Mixin.componentWillUpdate = function () {
    RCSS.injectAll();
  };
}

module.exports = Mixin;
