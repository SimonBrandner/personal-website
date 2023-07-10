import "../scss/App.scss";
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes } from "./Routes";

export const App: React.FC = () => {
	const routes = Routes.map((route) => {
		return (
			<Route key={route.paths[0]} path={route.paths}>
				<route.component />
			</Route>
		);
	});
	const defaultRoute = Routes.find((route) => route.default);
	routes.push(
		<Route key="/" exact path="/">
			<Redirect to={defaultRoute?.paths[0] || "/"} />
		</Route>,
	);

	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<div className="App_content">
					<Switch>{routes}</Switch>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
};
