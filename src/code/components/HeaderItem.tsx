import React from "react";
import "../../scss/components/HeaderItem.scss";

interface IProps {
	label: string;
	onClick: () => void;
}

export default class HeaderItem extends React.Component<IProps> {
	public render(): JSX.Element {
		const { label, onClick } = this.props;

		return (
			<div className="HeaderItem" onClick={onClick}>
				{ label }
			</div>
		);
	}
}
