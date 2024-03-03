import "../../scss/components/Header.scss";
import React, { useEffect } from "react";
import { HeaderItem } from "./HeaderItem";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { RouteList } from "../Routes";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const title = RouteList.find((r) => r.paths.find((p) => p === location.pathname))?.label;
		if (!title) return;

		document.title = `${t(title)} | Šimon Brandner`;
	}, [location]);

	const onNameClick = (): void => {
		const defaultRoute = RouteList.find((route) => route.default)?.paths;
		if (defaultRoute) navigate(defaultRoute[0]);
	};

	return (
		<nav className="Header">
			<div className="Header_content">
				<div className="Header_title">
					<div className="Header_name" onClick={onNameClick}>
						Šimon Brandner
					</div>
				</div>
				<div className="Header_menu">
					<div className="Header_menu_items">
						{RouteList.map((route) => (
							<HeaderItem key={route.paths[0]} paths={route.paths} label={t(route.label)} />
						))}
					</div>
					<div className="Header_menu_buttons">
						<ThemeSwitcher />
						<LanguageSwitcher />
					</div>
				</div>
			</div>
		</nav>
	);
};
