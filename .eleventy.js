const svgContents = require('eleventy-plugin-svg-contents');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(svgContents);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: 'njk',
  };
};
