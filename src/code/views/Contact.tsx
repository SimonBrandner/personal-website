import "../../scss/views/Contact.scss";
import React from "react";
import View from "./View";

export default class Contact extends React.Component {
	public render(): JSX.Element {
		return (
			<View className="Contact">
				<React.Fragment>
					Email: simon.bra.ag@gmail.com <br />
					Matrix: @simon.brandner:envs.net <br />
					Twitter: @BrandnerSimon <br />
					GitHub: @SimonBrandner <br />
					Location: Milky Way, Earth, Czech Republic <br />
				</React.Fragment>
			</View>
		);
	}
}
