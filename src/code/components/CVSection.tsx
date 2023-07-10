import "../../scss/components/CVPart.scss";
import React from "react";

interface IProps {
	name: string;
	children: Array<JSX.Element> | JSX.Element;
	last?: boolean;
}

export const CVSection: React.FC<IProps> = ({ name, children, last }) => {
	return (
		<div className="CVSection">
			<h1> { name } </h1>
			<React.Fragment>
				{ children }
			</React.Fragment>
			{ !last && <hr /> }
		</div>
	);
};
