export default function(eleventyConfig) {
	eleventyConfig.setInputDirectory("src");
	eleventyConfig.setOutputDirectory("docs");
	eleventyConfig.addPassthroughCopy("src/_data");
	eleventyConfig.addPassthroughCopy("src/js");
	eleventyConfig.addPassthroughCopy("src/c");
	eleventyConfig.addPassthroughCopy("src/m");
};
