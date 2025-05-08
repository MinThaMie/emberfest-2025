/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  overrides: [{
  	files: "**/*.{html,yaml,yml,md}",
	   singleQuote: false
  }]
};

export default config;
