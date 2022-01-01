import React from "react";
import "../../scss/components/ContactLink.scss";

interface IProps {
	link: string;
	className: string;
	label: string;
}

export default class CVPart extends React.Component<IProps> {
	public render(): JSX.Element {
		const { link, className, label } = this.props;

		return (
			<a 
				className={`ContactLink ContactLink_${className}`} 
				href={link} 
				target="_blank" 
				rel="noreferrer"
			>
				{ label }
			</a>
		);
	}
}
