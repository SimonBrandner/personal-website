import "../../scss/components/Footer.scss";
import React from "react";

export default class App extends React.Component {
	public render(): JSX.Element {
		return (
			<footer className="Footer">
				<a href="https://github.com/SimonBrandner/personal-website">Source code on GitHub</a>
				&nbsp;&middot;
				Uses&nbsp;<a href="https://github.com/google/material-design-icons">Material design icons</a>
			</footer>
		);
	}
}
