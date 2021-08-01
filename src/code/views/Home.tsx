import "../../scss/views/Home.scss";
import React from "react";
import View from "./View";

export default class Home extends React.Component {
	public render(): JSX.Element {
		return (
			<View className="Home">
				<React.Fragment>
					Hello! My name is Šimon Brander, <br />
					I am a student and a hobbyist programmer.
				</React.Fragment>
			</View>
		);
	}
}
