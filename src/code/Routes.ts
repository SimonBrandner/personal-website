import React from "react";
import { Contact } from "./views/Contact";
import { CV } from "./views/CV";
import { Home } from "./views/Home";
import i18next from "i18next";

export interface IRoute {
	label: string;
	paths: Array<string>;
	component: React.FC;
	default?: boolean;
}

export const RouteList: IRoute[] = [
	{
		// t("header.home", "Home")
		label: "header.home",
		paths: ["/home"],
		component: Home,
		default: true,
	},
	{
		// t("header.cv/projects", "CV/Projects")
		label: "header.cv/projects",
		paths: ["/cv", "/projects"],
		component: CV,
	},
	{
		// t("header.contact", "Contact")
		label: "header.contact",
		paths: ["/contact"],
		component: Contact,
	},
];
