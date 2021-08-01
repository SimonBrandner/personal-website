import "../scss/App.scss";
import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes } from "./Routes";

export default class App extends React.Component {
	public render(): JSX.Element {
		const routes = Routes.map((route) => {
			return (
				<Route key={route.path} path={route.path}>
					<route.component />
				</Route>
			);
		});
		const defaultRoute = Routes.find((route) => route.default);
		routes.push((
			<Route key="/" exact path="/">
				<Redirect to={defaultRoute?.path || "/"} />
			</Route>
		));

		return (
			<div className="App">
				<BrowserRouter>
					<Header />
					<Switch>
						{ routes }
					</Switch>
					<Footer />
				</BrowserRouter>
			</div>
		);
	}
}
