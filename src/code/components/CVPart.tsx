import "../../scss/components/CVPart.scss";
import React from "react";

interface IProps {
	name: string;
	from?: string;
	to?: string;
	children: Array<JSX.Element> | JSX.Element;
}

export const CVPart: React.FC<IProps> = ({ name, from, to, children }) => {
	
	return (
		<div className="CVPart">
			<div className="CVPart_title">
				<div className="CVPart_title_name"> { name } </div>
				{ from && (
					<div className="CVPart_title_time">
						{ from } &nbsp;&ndash;&nbsp; { to || "Present" }
					</div> 
				) }
			</div>
			{ children }
		</div>
	);
};
