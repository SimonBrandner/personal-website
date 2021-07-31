import "../../scss/views/Contact.scss";
import React from "react";
import View from "./View";

export default class Contact extends React.Component {
	public render(): JSX.Element {
		return (
			<View className="Contact">
				<React.Fragment>
					<a 
						className="Contact_link Contact_link_email"
						href="mailto:simon.bra.ag@gmail.com"
					> 
						Email
					</a>
					<a 
						className="Contact_link Contact_link_twitter"
						href="https://twitter.com/BrandnerSimon"
					> 
						Twitter
					</a>
					<a 
						className="Contact_link Contact_link_matrix"
						href="https://matrix.to/#/@simon.brandner:envs.net"
					> 
						Matrix
					</a>
					<a 
						className="Contact_link Contact_link_github"
						href="https://github.com/SimonBrandner"
					> 
						GitHub
					</a>
					<a 
						className="Contact_link Contact_link_location"
						href="https://www.google.com/maps/place/Czechia/"
					> 
						Location
					</a>
				</React.Fragment>
			</View>
		);
	}
}
