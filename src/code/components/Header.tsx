import "../../scss/components/Header.scss";
import React, { useEffect } from "react";
import { HeaderItem } from "./HeaderItem";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Routes } from "../Routes";
import { withRouter } from "react-router-dom";

export const Header = withRouter(({ location, history }) => {
	useEffect(() => {
		document.title = `${Routes.find((r) => r.path === location.pathname)?.label} | Šimon Brandner`;
	}, [location]);

	const onNameClick = (): void => {
		const defaultRoute = Routes.find(route => route.default)?.path;
		if (defaultRoute) history.push(defaultRoute);
	};

	return (
		<div className="Header">
			<div className="Header_title">
				<div className="Header_name" onClick={onNameClick}>
					Šimon Brander
				</div>
				<div className="Header_sub">
					A student and a programmer
				</div>
			</div>
			<div className="Header_menu">
				<div className="Header_menu_items">
					{ Routes.map((route) => {
						return (
							<HeaderItem key={route.path} path={route.path} label={route.label} />
						);
					}) }
				</div>
				<div className="Header_menu_buttons">
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	);
});
