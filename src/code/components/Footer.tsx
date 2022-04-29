import "../../scss/components/Footer.scss";
import React from "react";
import { Trans } from "react-i18next";

export const Footer: React.FC = () => {
	return (
		<footer className="Footer">
			<div className="Footer_item">
				<Trans i18nKey="components_footer_source">
					<a href="https://github.com/SimonBrandner/personal-website">Source code</a> on GitHub
				</Trans>
			</div>
			<div className="Footer_item">
				<Trans i18nKey="components_footer_material">
					Uses <a href="https://github.com/google/material-design-icons">Material design icons</a>
				</Trans>
			</div>
		</footer>
	);
};
