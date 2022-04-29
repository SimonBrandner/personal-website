import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import spanishTranslation from "../../i18n/es.json";
import { initReactI18next } from "react-i18next";

export const initialize = (): void => {
	i18next
		.use(I18nextBrowserLanguageDetector)
		.use(initReactI18next)
		.init({
			fallbackLng: "en",
			debug: true,
			resources: {
				es: {
					translation: spanishTranslation,
				},
			},
		});

};
