import React from "react";
import "../scss/App.scss";
import ThemeStore, { Theme } from "./stores/ThemeStore";

export default class App extends React.Component {
	private onThemeClick = (): void => {
		ThemeStore.instance.setActiveTheme(
			ThemeStore.instance.getActiveTheme() === Theme.DarkTheme
				? Theme.LightTheme 
				: Theme.DarkTheme,
		);
	};

	public render(): JSX.Element {
		return (
			<div className="App">
				<button onClick={this.onThemeClick}>Change theme</button>
			</div>
		);
	}
}
