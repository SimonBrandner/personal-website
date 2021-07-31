import React from "react";
import HeaderItem from "./HeaderItem";
import "../../scss/components/Header.scss";
import ThemeSwitcher from "./ThemeSwitcher";
import { Routes } from "../Routes";

export default class Header extends React.Component {
	public render(): JSX.Element {
		const headerItems = Routes.map((route) => {
			return (
				<HeaderItem key={route.path} path={route.path} label={route.label} />
			);
		});

		return (
			<div className="Header_wrapper">
				<div className="Header">
					<div className="Header_title">
						<div className="Header_name">
							Šimon Brander
						</div>
						<div className="Header_sub">
							A student and a programmer
						</div>
					</div>
					<div className="Header_menu">
						<div className="Header_menu_items">
							{ headerItems }
						</div>
						<div className="Header_menu_buttons">
							<ThemeSwitcher />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
