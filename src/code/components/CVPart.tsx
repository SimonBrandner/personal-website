import "../../scss/components/CVPart.scss";
import React from "react";
import { parse } from "marked";

interface IProps {
	name: string;
	content: string;
	from: string;
	to?: string;
}

export default class CVPart extends React.Component<IProps> {
	public render(): JSX.Element {
		const { name, content, from, to } = this.props;
		const html = parse(content);

		return (
			<div className="CVPart">
				<div className="CVPart_title">
					<div className="CVPart_title_name"> { name } </div>
					<div className="CVPart_title_time">
						{ from }&nbsp;&ndash;&nbsp;{ to || "Present" }
					</div>
				</div>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		);
	}
}
