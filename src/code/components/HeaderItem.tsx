import classNames from "classnames";
import "../../scss/components/HeaderItem.scss";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

interface IProps {
	label: string;
	paths: Array<string>;
}

export const HeaderItem: React.FC<IProps> = ({ label, paths }) => {
	return (
		<NavLink
			className={({ isActive }) => {
				return classNames("HeaderItem", { HeaderItem_active: isActive });
			}}
			to={paths[0]}
		>
			{label}
		</NavLink>
	);
};
