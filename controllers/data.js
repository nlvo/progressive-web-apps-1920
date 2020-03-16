const fetch = require('node-fetch');

// clean the data to the desirable data
function clean (oldData) {
	const newData = oldData.data.results;
	return newData.map((data) => {
		// https://stackoverflow.com/questions/54513877/javascript-merge-multiple-object-values-into-array
		const creators = data.creators ? data.creators.items.map((creator) => creator) : '';
		const stories = data.stories ? data.stories.items.map((story) => story) : '';
		const thumbnail = data.thumbnail.path.includes('image_not_available') ? '/img/not-found' : data.thumbnail.path;
		return {
			id: data.id,
			title: data.name || data.title,
			thumbnail: `${thumbnail}.${data.thumbnail.extension}`,
			comicsAvailable: data.comics ? data.comics.available : data.description,
			creators: creators,
			// characters: data.characters,
			stories: stories,
		};
	});

	// https://stackoverflow.com/questions/48435515/how-to-flatten-nested-array-of-object-using-es6
	// https://stackoverflow.com/questions/54733622/i-need-remove-unnecessary-json-objects-form-my-result-json-file-using-javascript
}

// fetched data and clean it
async function get (url) {
	const response = await fetch(url);
	const jsonData = await response.json();
	const cleanData = clean(jsonData);
	return cleanData;
}

module.exports = get;
