import React from "react";
import { Contact } from "./views/Contact";
import { CV } from "./views/CV";
import { Home } from "./views/Home";

export interface IRoute {
	label: string;
	paths: Array<string>;
	component: React.FC;
	default?: boolean;
}

export const Routes: IRoute[] = [
	{
		label: "Home",
		paths: ["/home"],
		component: Home,
		default: true,
	}, {
		label: "CV/Projects",
		paths: ["/cv", "/projects"],
		component: CV,
	}, {
		label: "Contact",
		paths: ["/contact"],
		component: Contact,
	},
];
