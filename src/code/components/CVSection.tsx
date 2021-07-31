import "../../scss/components/CVPart.scss";
import React from "react";

interface IProps {
	name: string;
	children: Array<JSX.Element> | JSX.Element;
}

export default class CVSection extends React.Component<IProps> {
	public render(): JSX.Element {
		const { name, children } = this.props;

		return (
			<div className="CVSection">
				<h1> { name } </h1>
				<React.Fragment>
					{ children }
				</React.Fragment>
				<hr />
			</div>
		);
	}
}
