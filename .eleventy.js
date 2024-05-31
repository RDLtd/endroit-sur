const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(eleventySass);

  eleventyConfig.addPassthroughCopy("./src/images");

  eleventyConfig.addWatchTarget("./src/images/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
