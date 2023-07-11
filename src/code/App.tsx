import "../scss/App.scss";
import React, { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IRoute, RouteList } from "./Routes";

export const App: React.FC = () => {
	const routes = RouteList.reduce((routes: ReactNode[], route: IRoute) => {
		route.paths.forEach((path) => {
			routes.push(<Route key={route.paths[0]} path={path} element={<route.component />} />);
		});
		return routes;
	}, []);
	const defaultRoute = RouteList.find((route) => route.default);
	routes.push(<Route key="/" path="/" element={<Navigate replace to={defaultRoute?.paths[0] || "/"} />}></Route>);

	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<div className="App_content">
					<Routes>{routes}</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
};
