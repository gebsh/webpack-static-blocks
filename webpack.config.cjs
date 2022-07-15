'use strict';

const path = require('path');

module.exports = {
	devtool: false,
	entry: {
		foo: './foo.mjs',
		bar: './bar.mjs',
	},
	mode: 'development',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist/'),
	},
};
