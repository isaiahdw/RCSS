'use strict';

var styles = {};

module.exports = {

  set : function(id, style) {
    styles[id] = style;
  },

  get : function(id) {
    return styles[id];
  },

  getAll : function() {
    return styles;
  },

  reset : function() {
    styles = {};
  }

};
