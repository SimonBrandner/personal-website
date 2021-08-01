import "../../scss/components/Footer.scss";
import React from "react";

export default class App extends React.Component {
	public render(): JSX.Element {
		return (
			<footer className="Footer">
				<div>
					<a href="https://github.com/SimonBrandner/personal-website">Source code on GitHub</a>
				</div>
				<div>
					Uses <a href="https://github.com/google/material-design-icons">Material design icons</a>
				</div>
			</footer>
		);
	}
}
