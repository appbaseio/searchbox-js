'use strict';

module.exports = function search(instance) {
	function sourceFn(query, cb) {
		instance.setValue(query, {
			triggerSuggestionsQuery: true
		});
		// eslint-disable-next-line
		cb([], instance.suggestionsRequestPending);

		instance.onSuggestions = function(suggestions) {
			cb(suggestions.data, instance.suggestionsRequestPending);
		};
	}
	return sourceFn;
};
