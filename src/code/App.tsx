import "../scss/App.scss";
import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes } from "./Routes";
import { useTranslation } from "react-i18next";

export const App: React.FC = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (language: string): void => {
		i18n.changeLanguage(language);
	};	

	const routes = Routes.map((route) => {
		return (
			<Route key={route.paths[0]} path={route.paths}>
				<route.component />
			</Route>
		);
	});
	const defaultRoute = Routes.find((route) => route.default);
	routes.push((
		<Route key="/" exact path="/">
			<Redirect to={defaultRoute?.paths[0] || "/"} />
		</Route>
	));

	return (
		<div className="App">
			<BrowserRouter>
				<Header onLanguageChange={changeLanguage} />
				<Switch>
					{ routes }
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};
