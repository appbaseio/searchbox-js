import searchbox from '..';
import Searchbase from '@appbaseio/searchbase';

const instance = new Searchbase({
	index: 'gitxplore-latest-app',
	credentials: 'LsxvulCKp:a500b460-73ff-4882-8d34-9df8064b3b38',
	url: 'https://scalr.api.appbase.io',
	size: 5,
	dataField: [
		'name',
		'description',
		'name.raw',
		'fullname',
		'owner',
		'topics'
	]
});

searchbox('#git', {}, [
	{
		source: searchbox.sources.hits(instance),
		templates: {
			suggestion: function(suggestion) {
				return `<p class="is-4">${suggestion.label}</p>`;
			},
			empty: function() {
				return `<div>No Results</div>`;
			},
			footer: function({ query, isEmpty }) {
				return `
                    <div style="background: #eaeaea; padding: 10px;">Footer</div>
                `;
			},
			header: function({ query, isEmpty }) {
				return `
                    <div style="background: #efefef; padding: 10px;">
                        Hello From Header
                    </div>
                `;
			}
		}
	}
]);

searchbox('#git2', { hint: false }, [
	{
		source: searchbox.sources.hits(instance),
		templates: {
			suggestion: function(suggestion) {
				return `<p class="is-4">${suggestion.label}</p>`;
			}
		}
	}
]);

searchbox('#git3', { autoselect: true }, [
	{
		source: searchbox.sources.hits(instance),
		templates: {
			suggestion: function(suggestion) {
				return `<p class="is-4">${suggestion.label}</p>`;
			}
		}
	}
]);

searchbox('#git4', { clearOnSelected: true }, [
	{
		source: searchbox.sources.hits(instance),
		templates: {
			suggestion: function(suggestion) {
				return `<p class="is-4">${suggestion.label}</p>`;
			}
		}
	}
]);

searchbox('#git5', { openOnFocus: true }, [
	{
		source: searchbox.sources.hits(instance),
		templates: {
			suggestion: function(suggestion) {
				return `<p class="is-4">${suggestion.label}</p>`;
			}
		}
	}
]);

searchbox('#git6', { keyboardShortcuts: ['s', 'a'] }, [
	{
		source: searchbox.sources.hits(instance),
		templates: {
			suggestion: function(suggestion) {
				return `<p class="is-4">${suggestion.label}</p>`;
			}
		}
	}
]);

searchbox('#git7', { minLength: 3 }, [
	{
		source: searchbox.sources.hits(instance),
		templates: {
			suggestion: function(suggestion) {
				return `<p class="is-4">${suggestion.label}</p>`;
			}
		}
	}
]);

searchbox('#git8', {}, [
	{
		source: searchbox.sources.hits(instance),
		templates: {
			suggestion: function(suggestion) {
				return `<p class="is-4">${suggestion.label}</p>`;
			}
		}
	}
])
	.on('selected', function(event, suggestion, dataset, context) {
		console.log('selected', suggestion, dataset, context);
	})
	.on('cursorchanged', function(event, suggestion, dataset) {
		console.log('cursorchanged', suggestion, dataset);
	})
	.on('opened', function(event) {
		console.log('opened', event);
	})
	.on('shown', function(event) {
		console.log('shown', event);
	})
	.on('empty', function(event) {
		console.log('empty', event);
	});

searchbox('#git9', {}, [
	{
		source: searchbox.sources.hits(instance),
		templates: {
			suggestion: function(suggestion) {
				return `<p class="is-4">${suggestion.label}</p>`;
			}
		},
		debounce: 1000
	}
]);

searchbox('#git10', {}, [
	{
		source: searchbox.sources.hits(instance),
		templates: {
			suggestion: function(suggestion) {
				return `<p class="is-4">${suggestion.label}</p>`;
			}
		},
		displayKey: function(suggestion) {
			return 'Awesome ' + suggestion.label + ' Blossom';
		}
	}
]);
