import React from "react";

interface IProps {
	children: JSX.Element;
}

export default class View extends React.Component<IProps> {
	public render(): JSX.Element {
		return (
			<div className="View">
				{ this.props.children }
			</div>
		);
	}
}
