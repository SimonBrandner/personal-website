import React from "react";
import "../../scss/components/ContactLink.scss";

interface IProps {
	link: string;
	className: string;
	label: string;
	rel?: string;
}

export const ContactLink: React.FC<IProps> = ({ link, className, label, rel }) => {
	return (
		<a 
			className={`ContactLink ContactLink_${className}`} 
			href={link} 
			target="_blank" 
			rel={`noreferrer ${rel}`}
		>
			{ label }
		</a>
	);
};
