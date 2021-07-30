import React from "react";
import "../scss/App.scss";
import Header from "./components/Header";

export default class App extends React.Component {
	public render(): JSX.Element {
		return (
			<div className="App">
				<Header />
			</div>
		);
	}
}
