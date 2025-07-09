export default function(eleventyConfig) {
	eleventyConfig.setInputDirectory("src");
	eleventyConfig.setOutputDirectory("docs");
	eleventyConfig.addPassthroughCopy("src/c");
	eleventyConfig.addPassthroughCopy("src/m");
};
