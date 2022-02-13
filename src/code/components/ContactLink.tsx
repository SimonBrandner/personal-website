import React from "react";
import "../../scss/components/ContactLink.scss";

interface IProps {
	link: string;
	className: string;
	label: string;
}

export const ContactLink: React.FC<IProps> = ({ link, className, label }) => {
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
};
