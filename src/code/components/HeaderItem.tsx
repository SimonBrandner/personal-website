import "../../scss/components/HeaderItem.scss";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
	label: string;
	path: string;
}

export default class HeaderItem extends React.Component<IProps> {
	public render(): JSX.Element {
		const { label, path } = this.props;

		return (
			<Link className="HeaderItem" to={path}>
				{ label }
			</Link>
		);
	}
}
