import "../../scss/components/IconButton.scss";
import React from "react";
import classNames from "classnames";

interface IProps {
	onClick: () => void;
	className: string;
}

export default class Header extends React.Component<IProps> {
	public render(): JSX.Element {
		const { onClick, className } = this.props;
		const classes = classNames("IconButton", className);
		
		return (
			<div className={classes} onClick={onClick} />
		);
	}
}
