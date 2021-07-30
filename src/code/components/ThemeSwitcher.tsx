import React from "react";
import ThemeStore, { Theme } from "../stores/ThemeStore";
import "../../scss/components/ThemeSwitcher.scss";

export default class Header extends React.Component {
	private onChangeThemeClick = (): void => {
		ThemeStore.instance.setActiveTheme(
			ThemeStore.instance.getActiveTheme() === Theme.DarkTheme
				? Theme.LightTheme
				: Theme.DarkTheme,
		);
	};

	public render(): JSX.Element {
		return (
			<div className="ThemeSwitcher">
				<button onClick={this.onChangeThemeClick}>Change theme</button>
			</div>
		);
	}
}
