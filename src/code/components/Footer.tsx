import "../../scss/components/Footer.scss";
import React from "react";

export default class App extends React.Component {
	public render(): JSX.Element {
		return (
			<footer className="Footer">
				<div className="Footer_item">
					<a href="https://github.com/SimonBrandner/personal-website">Source code</a> on GitHub
				</div>
				<div className="Footer_item">
					Uses <a href="https://github.com/google/material-design-icons">Material design icons</a>
				</div>
			</footer>
		);
	}
}
