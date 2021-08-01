import "../../scss/views/View.scss";
import React from "react";
import classNames from "classnames";

interface IProps {
	children: JSX.Element;
	className?: string;
}

export default class View extends React.Component<IProps> {
	public render(): JSX.Element {
		const { className } = this.props;
		const classes = classNames("View", className);

		return (
			<div className={classes}>
				{ this.props.children }
			</div>
		);
	}
}
