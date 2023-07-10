import "../../scss/views/Home.scss";
import React from "react";
import { View } from "./View";
import { Trans, useTranslation } from "react-i18next";

export const Home: React.FC = () => {
	useTranslation();

	return (
		<View className="Home">
			<Trans i18nKey="home.intro">
				Hello! My name is Šimon Brandner, <br />I am a student and a programmer.
			</Trans>
		</View>
	);
};
