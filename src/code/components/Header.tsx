import "../../scss/components/Header.scss";
import React, { useEffect } from "react";
import { HeaderItem } from "./HeaderItem";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Routes } from "../Routes";
import { withRouter } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Trans, useTranslation } from "react-i18next";

export const Header = withRouter(({ location, history }) => {
	const { t } = useTranslation();

	useEffect(() => {
		const title = Routes.find((r) => r.paths.find((p) => p === location.pathname))?.label;
		if (!title) return;

		document.title = `${t(title)} | Šimon Brandner`;
	}, [location]);

	const onNameClick = (): void => {
		const defaultRoute = Routes.find(route => route.default)?.paths;
		if (defaultRoute) history.push(defaultRoute[0]);
	};

	return (
		<div className="Header">
			<div className="Header_title">
				<div className="Header_name" onClick={onNameClick}>
					Šimon Brander
				</div>
				<div className="Header_sub">
					Homo sapiens sapiens
				</div>
			</div>
			<div className="Header_menu">
				<div className="Header_menu_items">
					{ Routes.map((route) => (
						<HeaderItem key={route.paths[0]} paths={route.paths} label={t(route.label)} />
					)) }
				</div>
				<div className="Header_menu_buttons">
					<ThemeSwitcher />
					<LanguageSwitcher />
				</div>
			</div>
		</div>
	);
});
