import "../../scss/views/View.scss";
import React from "react";
import classNames from "classnames";

interface IProps {
	children: JSX.Element;
	className?: string;
}

export const View: React.FC<IProps> = ({ children, className }) => {
	const classes = classNames("View", className);

	return (
		<div className={classes}>
			{ children }
		</div>
	);
};
