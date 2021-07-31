import "../scss/App.scss";
import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Contact from "./views/Contact";
import Home from "./views/Home";

export default class App extends React.Component {
	public render(): JSX.Element {
		return (
			<div className="App">
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path="/">
							<Redirect to="/home" />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
