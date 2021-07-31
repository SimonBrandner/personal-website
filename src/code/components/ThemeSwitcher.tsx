import React from "react";
import ThemeStore, { Theme, ThemeStoreEvent } from "../stores/ThemeStore";
import "../../scss/components/ThemeSwitcher.scss";
import IconButton from "./IconButton";
import classNames from "classnames";

interface IState {
	theme: Theme;
}

export default class Header extends React.Component<unknown, IState> {
	public constructor(props: unknown) {
		super(props);

		this.state = {
			theme: ThemeStore.instance.getActiveTheme(),
		};

	}

	public componentDidMount(): void {
		ThemeStore.instance.addEventListener(ThemeStoreEvent.ThemeChanged, this.onThemeChanged);
	}

	public componentWillUnmount(): void {
		ThemeStore.instance.removeEventListener(ThemeStoreEvent.ThemeChanged, this.onChangeThemeClick);
	}

	private onThemeChanged = (): void => {
		const theme = ThemeStore.instance.getActiveTheme();
		this.setState({ theme });
	}

	private onChangeThemeClick = (): void => {
		ThemeStore.instance.setActiveTheme(
			ThemeStore.instance.getActiveTheme() === Theme.DarkTheme
				? Theme.LightTheme
				: Theme.DarkTheme,
		);
	};

	public render(): JSX.Element {
		const classes = classNames("ThemeSwitcher", {
			"ThemeSwitcher_light": this.state.theme === Theme.LightTheme,
			"ThemeSwitcher_dark": this.state.theme === Theme.DarkTheme,
		});

		return (
			<IconButton className={classes} onClick={this.onChangeThemeClick} />
		);
	}
}
