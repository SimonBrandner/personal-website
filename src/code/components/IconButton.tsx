import "../../scss/components/IconButton.scss";
import React from "react";
import classNames from "classnames";
import { Key } from "../Keyboard";

interface IProps {
	onClick: () => void;
	className: string;
}

export default class Header extends React.Component<IProps> {
	private onKeyDown = (event: React.KeyboardEvent): void => {
		if (event.key === Key.Enter) {
			this.props.onClick();
		}
	}

	public render(): JSX.Element {
		const { onClick, className } = this.props;
		const classes = classNames("IconButton", className);
		
		return (
			<div className={classes} onClick={onClick} onKeyDown={this.onKeyDown} tabIndex={0} />
		);
	}
}
