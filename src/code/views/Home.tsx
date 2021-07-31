import "../../scss/views/Home.scss";
import React from "react";
import View from "./View";

export default class Home extends React.Component {
	public render(): JSX.Element {
		return (
			<View className="Home">
				<React.Fragment>
					Hello, my name is Šimon Brander, <br />
					I am a student and a hobbyist programmer in my free time
				</React.Fragment>
			</View>
		);
	}
}
