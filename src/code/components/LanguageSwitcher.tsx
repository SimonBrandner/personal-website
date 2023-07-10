import React from "react";
import "../../scss/components/LanguageSwitcher.scss";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: React.FC = () => {
	const { i18n } = useTranslation();

	const onChangeLanguageClick = (): void => {
		i18n.changeLanguage(i18n.language === "cs" ? "en" : "cs");
	};

	return (
		<div className="LanguageSwitcher" onClick={onChangeLanguageClick}>
			{ i18n.language === "en" ? "🇨🇿" : "🇬🇧" }
		</div>
	);
};
