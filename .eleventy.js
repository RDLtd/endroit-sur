const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
const esbuild = require("esbuild");

module.exports = function (eleventyConfig) {

  eleventyConfig.on('eleventy.before', async () => {
    await esbuild.build({
      entryPoints: ['src/scripts/main.js'],
      bundle: true,
      sourcemap: true,
      outfile: 'public/scripts/main.js',
      target: 'es6'
    });
  });

  eleventyConfig.addPlugin(eleventySass);

  eleventyConfig.addPassthroughCopy("./src/images");


  eleventyConfig.addWatchTarget("./src/images/");
  eleventyConfig.addWatchTarget("./src/scripts/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
