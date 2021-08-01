import "../../scss/views/Contact.scss";
import React from "react";
import View from "./View";

export default class Contact extends React.Component {
	public render(): JSX.Element {
		return (
			<View className="Contact">
				<React.Fragment>
					<a 
						className="Contact_link Contact_link_matrix"
						href="https://matrix.to/#/@simon.brandner:envs.net"
					> 
						Matrix
					</a>
					<a 
						className="Contact_link Contact_link_email"
						href="mailto:simon.bra.ag@gmail.com"
					> 
						Email
					</a>
					<a 
						className="Contact_link Contact_link_github"
						href="https://github.com/SimonBrandner"
					> 
						GitHub
					</a>
					<a 
						className="Contact_link Contact_link_twitter"
						href="https://twitter.com/BrandnerSimon"
					> 
						Twitter
					</a>
					<a
						className="Contact_link Contact_link_youtube"
						href="https://www.youtube.com/channel/UCe_DknI701POwF5oviZib8g/"
					>
						YouTube
					</a>
					<a
						className="Contact_link Contact_link_linkedin"
						href="https://www.linkedin.com/in/%C5%A1imon-brandner-69a139209/"
					>
						LinkedIn
					</a>
					<a
						className="Contact_link Contact_link_reddit"
						href="https://www.reddit.com/user/SimonBrandner/"
					>
						Reddit
					</a>
					<a
						className="Contact_link Contact_link_stackoverflow"
						href="https://stackoverflow.com/users/10822785/%c5%a0imon-brandner"
					>
						Stack Overflow
					</a>
					<a
						className="Contact_link Contact_link_goodreads"
						href="https://www.goodreads.com/user/show/112089576-imon-brandner"
					>
						Goodreads
					</a>
					<a
						className="Contact_link Contact_link_gitlab"
						href="https://gitlab.com/simon.brandner"
					>
						GitLab
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
