import { Trans, useTranslation } from "react-i18next";
import "../../scss/components/Footer.scss";
import React from "react";

export const Footer: React.FC = () => {
	useTranslation();

	return (
		<footer className="Footer">
			<div className="Footer_content">
				<div className="Footer_item">
					<Trans i18nKey="footer.sourceCode">
						<a href="https://github.com/SimonBrandner/personal-website">Source code</a> on GitHub
					</Trans>
				</div>
				<div className="Footer_item">
					<Trans i18nKey="footer.icons">
						Uses <a href="https://github.com/google/material-design-icons">Material design icons</a>
					</Trans>
				</div>
			</div>
		</footer>
	);
};
