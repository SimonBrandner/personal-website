import React from "react";
import HeaderItem from "./HeaderItem";
import "../../scss/components/Header.scss";
import ThemeSwitcher from "./ThemeSwitcher";

export default class Header extends React.Component {
	private onHomeClick = (): void => {
		// TBD
	}

	public render(): JSX.Element {
		return (
			<div className="Header">
				<div className="Header_items">
					<HeaderItem onClick={this.onHomeClick} label="Home" />
				</div>
				<div className="Header_buttons">
					<ThemeSwitcher />
				</div>
			</div>
		);
	}
}
