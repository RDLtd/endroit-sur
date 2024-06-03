const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(eleventySass);

  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/scripts");


  eleventyConfig.addWatchTarget("./src/images/");
  eleventyConfig.addWatchTarget("./src/scripts/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
