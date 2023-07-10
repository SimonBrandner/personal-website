module.exports = {
	keySeparator: false,
	namespaceSeparator: false,
	contextSeparator: "|",
	pluralSeparator: "|",
	createOldCatalogs: false,
	defaultNamespace: "translation",
	indentation: "	",
	lexers: {
		ts: [
			{
				lexer: "JavascriptLexer",
				functions: ["t", "translatedError"],
				functionsNamespace: ["useTranslation", "withTranslation"],
			},
		],
	},
	locales: ["en", "cs"],
	output: "locales/$LOCALE/$NAMESPACE.json",
	input: ["src/**/*.{ts,tsx}"],
	sort: true,
	useKeysAsDefaultValue: true,
};
