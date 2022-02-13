import "../../scss/components/HeaderItem.scss";
import React from "react";
import { NavLink } from "react-router-dom";

interface IProps {
	label: string;
	path: string;
}

export const HeaderItem: React.FC<IProps> = ({ label, path }) =>{
	return (
		<NavLink className="HeaderItem" activeClassName="HeaderItem_active" to={path}>
			{ label }
		</NavLink>
	);
};
