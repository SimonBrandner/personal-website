import React from "react";
import { Dropdown } from "./Dropdown";

const OPTIONS = {
	"en": "English",
	"es": "Español",
};

interface IProps {
	onLanguageChange: (language: string) => void;
}

export const LanguageSwitcher: React.FC<IProps> = ({ onLanguageChange }) => {
	return (
		<Dropdown onValueChange={onLanguageChange} defaultValue="en" options={OPTIONS} />
	);
};
