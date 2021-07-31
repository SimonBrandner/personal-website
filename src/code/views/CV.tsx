import "../../scss/views/CV.scss";
import React from "react";
import CVPart from "../components/CVPart";
import View from "./View";
import CVSection from "../components/CVSection";

const GENERAL_GITHUB = `
I've been contributing to open source projects
on GitHub and putting my work there. See a list of all my
[pull requests](https://github.com/search?q=is%3Apr+author%3ASimonBrandner)
and my [profile](https://github.com/SimonBrandner/).
`;

const GENERAL_DOTFILES = `
dotfiles is a repo containing my configuration files as well as info about my setup.
`;

const PROJECTS_ELEMENT_MATRIX = `
+ Rewrote parts of the VoIP stack, so that they are more flexible
+ Specced and added new VoIP features
+ Added numerous features
+ Fixed numerous bugs
`;

const PROJECTS_I3_PAGER = `
+ Rewrote part of the widget for better extensibility
+ Added several new features
`;

const PROJECTS_TASKIZER = `
Taskizer was a project that aimed to make a free and open task-management app. 
From the perspective of today the code is probably awful. Some if its features were:
+ Nested tasks
+ Scheduling
+ Project importing
+ System tray icon
+ Keyboard shortcuts
+ Repeated tasks
+ Repeat presets
+ Multiple themes
+ Reminders
`;

const PROJECTS_YEELIGHT_CPPAPI = `
The Yeelight C++ API is a library for controlling Yeelight bulbs using C++.
`;

export default class CV extends React.Component {
	public render(): JSX.Element {
		return (
			<View className="CV">
				<React.Fragment>
					<CVSection name="General">
						<CVPart 
							name="GitHub"
							from="June 2019"
							content={GENERAL_GITHUB}
						/>
						<CVPart
							name="dotfiles"
							from="January 2019"
							content={GENERAL_DOTFILES}
						/>
					</CVSection>
					<CVSection name="Projects">
						<CVPart 
							name="Element Web/Desktop and Matrix"
							from="November 2020"
							content={PROJECTS_ELEMENT_MATRIX}
						/>
						<CVPart 
							name="i3-pager"
							from="October 2020"
							to="November 2020"
							content={PROJECTS_I3_PAGER}
						/>
						<CVPart
							name="TaskizerDesktop"
							from="March 2020"
							to="August 2020"
							content={PROJECTS_TASKIZER}
						/>
						<CVPart
							name="YeelightCPPAPI"
							from="June 2019"
							to="June 2020"
							content={PROJECTS_YEELIGHT_CPPAPI}
						/>
					</CVSection>
				</React.Fragment>
			</View>
		);
	}
}
