const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
		// Glob to find no-import global components
		// (The default changed from `false` in Eleventy WebC v0.7.0)
		components: "components/**/*.webc",
    });
    return {
        dir: {
            input: "docs",
            output: "_site"
        }
    }
};