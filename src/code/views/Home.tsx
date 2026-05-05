import "../../scss/views/Home.scss";
import React from "react";
import { View } from "./View";
import { Trans, useTranslation } from "react-i18next";

export const Home: React.FC = () => {
	useTranslation();

	return (
		<View className="Home">
			<span className="HomeHeading">
				<Trans i18nKey="home.about.heading">About</Trans>
			</span>
			<span className="HomeHeading InterestHeading">
				<Trans i18nKey="home.interests.heading">Interests</Trans>
			</span>
			<p className="About">
				<Trans i18nKey="home.about">
					<p>
						I am a computer science student at the Faculty of Electrical Engineering at the Czech Technical University.
					</p>
					<p>I am interested in FOSS, theoretical underpinnings of computer science and mathematics. </p>
				</Trans>
			</p>
			<ul className="Interests">
				<li>
					<Trans i18nKey="home.interests.foss">FOSS software: Linux, NixOS, Sway, Neovim, Matrix, Element</Trans>
				</li>
				<li>
					<Trans i18nKey="home.interests.langs">
						Strongly typed and/or functional programming languages: Rust, Haskell, Agda, Rocq, Nix
					</Trans>
				</li>
				<li>
					<Trans i18nKey="home.interests.maths">
						Category theory, logic, type theory, formalisation of mathematics, (linear) algebra
					</Trans>
				</li>
			</ul>
		</View>
	);
};
