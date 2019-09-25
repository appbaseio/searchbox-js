"use strict";

var _ = require("../common/utils.js");

module.exports = function search(instance) {
  function sourceFn(query, cb) {
    instance.setValue(query, {
      triggerSuggestionsQuery: true
    });

    instance.onSuggestions = function(suggestions) {
      cb(suggestions.data);
    }
  }
  return sourceFn;
};
