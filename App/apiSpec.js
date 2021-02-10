const requireDir = require('require-dir');
const apiSpecPathsAndDefinitions = requireDir('./src/apiSpec');

let paths = {};
let definitions = {};

Object.keys(apiSpecPathsAndDefinitions).forEach(item => {
	if (apiSpecPathsAndDefinitions[item].paths) {
		paths = {
			...paths,
			...apiSpecPathsAndDefinitions[item].paths,
		};
	}

	if (apiSpecPathsAndDefinitions[item].definitions) {
		definitions = {
			...definitions,
			...apiSpecPathsAndDefinitions[item].definitions,
		};
	}
});

const apiSpec = {
	swagger: '2.0',
	info: {
		title: 'App',
		description: 'Description',
		version: '1.0.0',
    },
    schemes: ['http', 'https'],
	host: "app.endpoints.my-first-app-123.cloud.goog",
	basePath: '/',
  	paths,
	definitions,
}

module.exports = apiSpec;