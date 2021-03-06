/**
 * @module
 */
var nunjucks = require('nunjucks');

/**
 * DynamicFileSystemLoader wraps around the nunjucks FileSystemLoader
 * to allow the template directory to be changed.
 * @alias DynamicFileSystemLoader
 * @param {ThemeProperties} theme
 * @constructor
 *
 */
module.exports = function DynamicFileSystemLoader(theme) {

	//@todo inject the loader, listen for THEME_CHANGE_EVENT?

	var loader = new nunjucks.FileSystemLoader(theme.templates());

	if (loader.on)
		this.on = loader.on.bind(loader);

	/**
	 * getSource returns the template asked for.
	 *
	 * @param {String} tmpl
	 * @return {Object}
	 */
	this.getSource = function(tmpl) {
		return loader.getSource(tmpl);
	};



};
