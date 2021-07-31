import "../../scss/components/Footer.scss";
import React from "react";

export default class App extends React.Component {
	public render(): JSX.Element {
		return (
			<footer className="Footer">
				<span>
					<a href="https://github.com/SimonBrandner/personal-website">Source code on GitHub</a>
				</span>
				&nbsp;
				&middot;
				&nbsp;
				<span>
					Uses
					&nbsp;
					<a 
						href="https://github.com/google/material-design-icons"
						rel="noreferrer noopener"
						target="_blank"
					>
						Material design icons
					</a>
				</span>
			</footer>
		);
	}
}
