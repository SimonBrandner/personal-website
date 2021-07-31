import { ComponentClass } from "react";
import Contact from "./views/Contact";
import CV from "./views/CV";
import Home from "./views/Home";

export interface IRoute {
	label: string;
	path: string;
	component: ComponentClass;
	default?: boolean;
}

export const Routes: IRoute[] = [
	{
		label: "Home",
		path: "/home",
		component: Home,
		default: true,
	}, {
		label: "CV and Projects",
		path: "/cv",
		component: CV,
	}, {
		label: "Contact",
		path: "/contact",
		component: Contact,
	},
];
