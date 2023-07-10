import React, { useEffect, useState } from "react";
import { ThemeStore, Theme, ThemeStoreEvent } from "../stores/ThemeStore";
import "../../scss/components/ThemeSwitcher.scss";
import { IconButton } from "./IconButton";
import classNames from "classnames";

export const ThemeSwitcher: React.FC = () => {
	const [theme, setTheme] = useState(ThemeStore.instance.getActiveTheme());

	useEffect(() => {
		ThemeStore.instance.addEventListener(ThemeStoreEvent.ThemeChanged, onThemeChanged);
		return () => ThemeStore.instance.removeEventListener(ThemeStoreEvent.ThemeChanged, onChangeThemeClick);
	}, []);

	const onThemeChanged = (): void => {
		setTheme(ThemeStore.instance.getActiveTheme());
	};

	const onChangeThemeClick = (): void => {
		ThemeStore.instance.setActiveTheme(
			ThemeStore.instance.getActiveTheme() === Theme.DarkTheme ? Theme.LightTheme : Theme.DarkTheme,
		);
	};

	const classes = classNames("ThemeSwitcher", {
		ThemeSwitcher_light: theme === Theme.LightTheme,
		ThemeSwitcher_dark: theme === Theme.DarkTheme,
	});

	return <IconButton className={classes} onClick={onChangeThemeClick} />;
};
