export default function(eleventyConfig) {
	eleventyConfig.setInputDirectory("src");
	eleventyConfig.setOutputDirectory("docs");
	eleventyConfig.addPassthroughCopy("src/c");
	eleventyConfig.addPassthroughCopy("src/f");
	eleventyConfig.addPassthroughCopy("src/m");
};
