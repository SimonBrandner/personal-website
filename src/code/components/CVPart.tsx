import { useTranslation } from "react-i18next";
import "../../scss/components/CVPart.scss";
import React, { ReactNode, useEffect, useMemo } from "react";
import classNames from "classnames";

interface IProps {
	name: string;
	from?: string;
	to?: string;
	link?: string;
	children: Array<ReactNode> | ReactNode;
}

export const CVPart: React.FC<IProps> = ({ name, from, to, link, children }) => {
	const { t } = useTranslation();
	const titleNameClasses = useMemo(
		() =>
			classNames("CVPart_title_name", {
				CVPart_title_name_link: Boolean(link),
			}),
		[link],
	);

	return (
		<div className="CVPart">
			<div className="CVPart_title">
				<a className={titleNameClasses} href={link} rel="noreferrer noopener">
					{name}
				</a>
				{from && (
					<div className="CVPart_title_time">
						{from} &nbsp;&ndash;&nbsp; {to || t("cvPart.present", "Present")}
					</div>
				)}
			</div>
			{children}
		</div>
	);
};
