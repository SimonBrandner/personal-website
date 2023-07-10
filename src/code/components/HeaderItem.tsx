import "../../scss/components/HeaderItem.scss";
import React from "react";
import { NavLink } from "react-router-dom";

interface IProps {
	label: string;
	paths: Array<string>;
}

export const HeaderItem: React.FC<IProps> = ({ label, paths }) => {
	return (
		<NavLink
			className="HeaderItem"
			activeClassName="HeaderItem_active"
			isActive={(match, location) => Boolean(paths.find((p) => p === location?.pathname))}
			to={paths[0]}
		>
			{label}
		</NavLink>
	);
};
