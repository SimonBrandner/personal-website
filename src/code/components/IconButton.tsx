import "../../scss/components/IconButton.scss";
import React from "react";
import classNames from "classnames";
import { Key } from "../Keyboard";

interface IProps {
	onClick: () => void;
	className: string;
}

export const IconButton: React.FC<IProps> = ({ onClick, className }) => {
	const classes = classNames("IconButton", className);

	const onKeyDown = (event: React.KeyboardEvent): void => {
		if ([Key.Enter, Key.Space].includes(event.key as Key)) onClick();
	};

	return <div className={classes} onClick={onClick} onKeyDown={onKeyDown} tabIndex={0} />;
};
