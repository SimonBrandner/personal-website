import React from "react";
import View from "./View";

export default class Contact extends React.Component {
	public render(): JSX.Element {
		return (
			<View>
				<div>
					Email: simon.bra.ag@gmail.com
					Matrix: @simon.brandner:envs.net
					Twitter: @BrandnerSimon
					GitHub: @SimonBrandner
					Location: Milky Way, Earth, Czech Republic
				</div>
			</View>
		);
	}
}
