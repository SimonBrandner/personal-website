import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { App } from "./code/App";
import { ThemeStore } from "./code/stores/ThemeStore";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

ThemeStore.instance.initialize();

i18n
	.use(initReactI18next)
	.use(Backend)
	.use(LanguageDetector)
	.init({
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
	});

const domNode = document.getElementById("root")!;
const root = createRoot(domNode);
root.render(
	<React.StrictMode>
		<Suspense fallback="loading">
			<App />
		</Suspense>
	</React.StrictMode>,
);
