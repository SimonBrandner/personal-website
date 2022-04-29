import "../../scss/views/Home.scss";
import React from "react";
import { View } from "./View";
import { Trans } from "react-i18next";

export const Home: React.FC = () => {
	return (
		<View className="Home">
			<Trans i18nKey="views_home_hello">
				Hello! My name is Šimon Brander, <br />
				I am a student and a hobbyist programmer.
			</Trans>
		</View>
	);
};
