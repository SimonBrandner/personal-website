import "../../scss/views/Contact.scss";
import React from "react";
import View from "./View";
import ContactLink from "../components/ContactLink";

export default class Contact extends React.Component {
	public render(): JSX.Element {
		return (
			<View className="Contact">
				<React.Fragment>
					<ContactLink 
						className="matrix"
						link="https://matrix.to/#/@simon.brandner:envs.net"
						label="Matrix"
					/>
					<ContactLink 
						className="email"
						link="mailto:simon.bra.ag@gmail.com"
						label="Email"
					/>
					<ContactLink 
						className="github"
						link="https://github.com/SimonBrandner"
						label="GitHub"
					/>
					<ContactLink 
						className="twitter"
						link="https://twitter.com/BrandnerSimon"
						label="Twitter"
					/>
					<ContactLink
						className="youtube"
						link="https://www.youtube.com/channel/UCe_DknI701POwF5oviZib8g/"
						label="YouTube"
					/>
					<ContactLink
						className="linkedin"
						link="https://www.linkedin.com/in/%C5%A1imon-brandner-69a139209/"
						label="LinkedIn"
					/>
					<ContactLink
						className="reddit"
						link="https://www.reddit.com/user/SimonBrandner/"
						label="Reddit"
					/>
					<ContactLink
						className="stackoverflow"
						link="https://stackoverflow.com/users/10822785/%c5%a0imon-brandner"
						label="Stack Overflow"
					/>
					<ContactLink
						className="pinterest"
						link="https://cz.pinterest.com/SimonBrandnerDev"
						label="Pinterest"
					/>
					<ContactLink
						className="goodreads"
						link="https://www.goodreads.com/user/show/112089576-imon-brandner"
						label="Goodreads"
					/>
					<ContactLink 
						className="spotify"
						link="https://open.spotify.com/user/simon.bra.ag?si=0bb66d83f4024910"
						label="Spotify"
					/>
					<ContactLink
						className="gitlab"
						link="https://gitlab.com/simon.brandner"
						label="GitLab"
					/>
					<ContactLink 
						className="location"
						link="https://www.google.com/maps/place/Czechia/"
						label="Location"
					/>
				</React.Fragment>
			</View>
		);
	}
}
